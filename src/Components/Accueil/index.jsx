import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";

const Accueil = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  const roles = [
    { id: "general", name: "Général" },
    { id: "administrateur", name: "Administrateur" },
    { id: "enseignant", name: "Enseignant" },
    { id: "parent", name: "Parent" },
  ];

  // Charger le rôle depuis le localStorage au montage
  useEffect(() => {
    const savedRole = localStorage.getItem("eduos_role");
    if (savedRole) {
      setSelectedRole(savedRole);
    }
  }, []);

  const handleRoleSelect = (role) => {
    localStorage.setItem("eduos_role", role); // Sauvegarde du rôle sélectionné
    setSelectedRole(role);
    window.location.reload(); // Actualisation de la page
  };

  const resetSelection = () => {
    localStorage.removeItem("eduos_role"); // Réinitialisation du rôle dans le localStorage
    setSelectedRole(null);
    window.location.reload(); // Actualisation de la page
  };

  return (
    <Container fluid={true} className="mt-5">
      <Row>
        <Col sm="12">
          <Card>
            <CardBody>
              {!selectedRole ? (
                <div className="text-center">
                  <h4>Veuillez choisir un rôle :</h4>
                  <div className="d-flex justify-content-center mt-4">
                    {roles.map((role) => (
                      <Button
                        key={role.id}
                        color="primary"
                        className="mx-2"
                        onClick={() => handleRoleSelect(role.id)}
                      >
                        {role.name}
                      </Button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <h4>
                    Rôle sélectionné :{" "}
                    {roles.find((r) => r.id === selectedRole)?.name || "Inconnu"}
                  </h4>
                  <p className="mt-3">
                    Les fonctionnalités pour le rôle "
                    {roles.find((r) => r.id === selectedRole)?.name || "Inconnu"}
                    " s'affichent ici.
                  </p>
                  <Button
                    color="secondary"
                    className="mt-4"
                    onClick={resetSelection}
                  >
                    Changer de rôle
                  </Button>
                </div>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Accueil;
