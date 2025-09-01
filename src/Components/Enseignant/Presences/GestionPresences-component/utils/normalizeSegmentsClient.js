function normalizeSegmentsClient(rawSegments = []) {
  const segs = rawSegments
    .map((s) => ({ debut: new Date(s.debut), fin: new Date(s.fin), statut: !!s.statut }))
    .filter((s) => !isNaN(s.debut) && !isNaN(s.fin) && s.debut < s.fin)
    .sort((a, b) => a.debut - b.debut);

  const merged = [];
  for (const s of segs) {
    const last = merged[merged.length - 1];
    if (!last) merged.push({ ...s });
    else {
      if (last.fin >= s.debut) {
        if (last.statut === s.statut) last.fin = new Date(Math.max(last.fin, s.fin));
        else {
          if (last.debut < s.debut) {
            last.fin = s.debut;
            merged.push({ ...s });
          } else merged.push({ ...s });
        }
      } else merged.push({ ...s });
    }
  }
  return merged.map((s) => ({ debut: s.debut.toISOString(), fin: s.fin.toISOString(), statut: !!s.statut }));
}




export default normalizeSegmentsClient;