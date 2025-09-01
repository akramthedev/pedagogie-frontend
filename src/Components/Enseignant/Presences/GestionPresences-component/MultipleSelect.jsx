import React, { useState } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, FormGroup, Label, Input } from "reactstrap";

const behaviorOptions = ["Sérieux", "Bavard", "Perturbateur", "Distrait"];

const MultipleSelectDropdown = ({ row, handleBehaviorChange }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedBehaviors, setSelectedBehaviors] = useState(row.comportement || []);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleSelection = (behavior) => {
    let updatedBehaviors = selectedBehaviors.includes(behavior)
      ? selectedBehaviors.filter((item) => item !== behavior) // Supprime si déjà sélectionné
      : [...selectedBehaviors, behavior]; // Ajoute sinon

    setSelectedBehaviors(updatedBehaviors);
    handleBehaviorChange(row.Etd_Id, updatedBehaviors);

    console.log("updatedBehaviors", updatedBehaviors);
  };

  return (
    <FormGroup>
      <Label>Appréciation</Label>
      <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} style={{ width: "100%" }}>
        <DropdownToggle
          caret
          color="black"
          style={{
            minWidth: "200px", // Agrandit le bouton
            maxWidth: "100%", // Empêche le dépassement
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            padding: "10px", // Plus d'espace pour la lisibilité
          }}
        >
          {selectedBehaviors.length > 0 ? selectedBehaviors.join(", ") : "Sélectionner..."}
        </DropdownToggle>
        <DropdownMenu
          style={{
            width: "100%", // Fait correspondre la largeur du menu au bouton
            maxHeight: "200px", // Ajoute un défilement vertical si nécessaire
            overflowY: "auto",
          }}
        >
          {behaviorOptions.map((behavior) => (
            <DropdownItem
              key={behavior}
              toggle={false}
              style={{
                backgroundColor: selectedBehaviors.includes(behavior) ? "#7366ff" : "white",
                color: selectedBehaviors.includes(behavior) ? "white" : "black",
                fontWeight: selectedBehaviors.includes(behavior) ? "bold" : "normal",
                display: "flex",
                alignItems: "center",
                gap: "10px", // Espacement entre la case à cocher et le texte
                padding: "8px",
              }}
              onClick={() => handleSelection(behavior)}
            >
              <Input
                type="checkbox"
                checked={selectedBehaviors.includes(behavior)}
                onChange={() => handleSelection(behavior)}
                style={{ width: "18px", height: "18px" }} // Agrandit la case à cocher
              />
              {behavior}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </FormGroup>
  );
};

export default MultipleSelectDropdown;
