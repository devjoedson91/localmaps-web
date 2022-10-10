import {Container, InputStyled} from './styles';

interface InputProps {
    value: string;
    name: string;
    label: string;
    onChange: Function;
}

export default function Input(props: InputProps) {
    return (
        <Container>
            <label>{props.label}</label>
            <InputStyled 
                required
                name={props.name}
                value={props.value}
                onChange={(event) => {

                    props.onChange((prev: any) => ({...prev, [props.name]: event.target.value}))

                }}
            />
        </Container>
    );
}