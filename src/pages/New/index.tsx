import { useState } from "react";
import {
  Button,
  ButtonContainer,
  CategoryBox,
  CategoryContainer,
  CategoryImage,
  Container,
  Form,
  FormTitle,
  MapContainer,
  Section,
} from "./styles";
import Input from "../../components/Input";
import { LatLngExpression } from "leaflet";
import { Marker, TileLayer } from "react-leaflet";
import { categories } from "./categories";

export default function New() {
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    contact: "",
    category: "",
  });

  

  return (
    <Container>
      <Form>
        <FormTitle>Cadastro do comercio local</FormTitle>
        <Section>Dados</Section>

        <Input
          label="Nome do local"
          name="name"
          value={formValues.name}
          onChange={setFormValues}
        />

        <Input
          label="Descrição"
          name="description"
          value={formValues.description}
          onChange={setFormValues}
        />

        <Input
          label="Contato"
          name="contact"
          value={formValues.contact}
          onChange={setFormValues}
        />

        <Section>Endereço</Section>

        <MapContainer center={{
            lat: 0,
            lng: 0
        } as LatLngExpression}
          zoom={13}
          whenCreated={() => {}}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[0,0] as LatLngExpression}/>
        </MapContainer>

        <Section>Categoria</Section>

        <CategoryContainer>
            {categories.map(category => {

                return (
                    <CategoryBox 
                      key={category.key} 
                      onClick={prev => ({...prev, category: category.key})}
                      isActive={formValues.category === category.key}
                    >
                      <CategoryImage src={category.url} />
                      {category.label}
                    </CategoryBox>
                )

            })}
        </CategoryContainer>

        <ButtonContainer>
          <Button type="submit">Salvar</Button>
        </ButtonContainer>
      </Form>
    </Container>
  );
}
