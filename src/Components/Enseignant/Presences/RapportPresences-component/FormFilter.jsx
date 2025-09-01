import React, { useState } from "react";
import { Row, Col, Form, FormGroup, Label, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge } from "reactstrap";

const FormFilter = ({ onSubmit }) => {
  const [formValues, setFormValues] = useState({
    classes: [],
    dateDebut: "",
    dateFin: "",
    justificatif: "",
    etats: [],
  });

  const [dropdownClassesOpen, setDropdownClassesOpen] = useState(false);
  const [dropdownEtatsOpen, setDropdownEtatsOpen] = useState(false);

  const toggleClassesDropdown = () => setDropdownClassesOpen(!dropdownClassesOpen);
  const toggleEtatsDropdown = () => setDropdownEtatsOpen(!dropdownEtatsOpen);

  const classesOptions = ["Mathématiques", "Physique", "Chimie", "Informatique"];
  const etatsOptions = ["Absent", "Présentiel", "Exclu", "Dispensé", "Retard"];

  const handleSelectionChange = (field, value) => {
    const currentValues = formValues[field];
    if (currentValues.includes(value)) {
      setFormValues({
        ...formValues,
        [field]: currentValues.filter((item) => item !== value),
      });
    } else {
      setFormValues({
        ...formValues,
        [field]: [...currentValues, value],
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValues);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row form>
        <Col md="4">
          <FormGroup>
            <Label for="dateDebut">Date Début</Label>
            <input
              type="date"
              id="dateDebut"
              name="dateDebut"
              className="form-control"
              value={formValues.dateDebut}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
        <Col md="4">
          <FormGroup>
            <Label for="dateFin">Date Fin</Label>
            <input
              type="date"
              id="dateFin"
              name="dateFin"
              className="form-control"
              value={formValues.dateFin}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
        <Col md="4">
          <FormGroup>
            <Label for="justificatif">Justificatif</Label>
            <input
              type="text"
              id="justificatif"
              name="justificatif"
              className="form-control"
              value={formValues.justificatif}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
      </Row>

      {/* Classes Dropdown */}
      <Row form>
        <Col md="6">
          <Label className="fw-bold">Classes</Label>
          <Dropdown isOpen={dropdownClassesOpen} toggle={toggleClassesDropdown}>
            <DropdownToggle caret color="primary">
              Sélectionnez les Classes
            </DropdownToggle>
            <DropdownMenu>
              {classesOptions.map((classe) => (
                <DropdownItem key={classe} toggle={false}>
                  <input
                    type="checkbox"
                    id={`class-${classe}`}
                    checked={formValues.classes.includes(classe)}
                    onChange={() => handleSelectionChange("classes", classe)}
                  />
                  <label htmlFor={`class-${classe}`} className="ms-2">
                    {classe}
                  </label>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <div className="mt-3">
            {formValues.classes.map((classe) => (
              <Badge
                key={classe}
                color="primary"
                pill
                className="me-2 d-inline-flex align-items-center"
                style={{ padding: "0.5rem 0.75rem", fontSize: "0.9rem" }}
              >
                {classe}
                <Button
                  close
                  style={{ marginLeft: "8px" }}
                  onClick={() => handleSelectionChange("classes", classe)}
                />
              </Badge>
            ))}
          </div>
        </Col>

        {/* États Dropdown */}
        <Col md="6">
          <Label className="fw-bold">États</Label>
          <Dropdown isOpen={dropdownEtatsOpen} toggle={toggleEtatsDropdown}>
            <DropdownToggle caret color="success">
              Sélectionnez les États
            </DropdownToggle>
            <DropdownMenu>
              {etatsOptions.map((etat) => (
                <DropdownItem key={etat} toggle={false}>
                  <input
                    type="checkbox"
                    id={`etat-${etat}`}
                    checked={formValues.etats.includes(etat)}
                    onChange={() => handleSelectionChange("etats", etat)}
                  />
                  <label htmlFor={`etat-${etat}`} className="ms-2">
                    {etat}
                  </label>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <div className="mt-3">
            {formValues.etats.map((etat) => (
              <Badge
                key={etat}
                color="success"
                pill
                className="me-2 d-inline-flex align-items-center"
                style={{ padding: "0.5rem 0.75rem", fontSize: "0.9rem" }}
              >
                {etat}
                <Button
                  close
                  style={{ marginLeft: "8px" }}
                  onClick={() => handleSelectionChange("etats", etat)}
                />
              </Badge>
            ))}
          </div>
        </Col>
      </Row>

      <Button color="primary" type="submit" className="mt-3">
        Appliquer
      </Button>
    </Form>
  );
};

export default FormFilter;
