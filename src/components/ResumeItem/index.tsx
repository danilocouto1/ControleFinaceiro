import * as styled from './style';

type Props = {
    title: string;
    value: number;
    color?: string;
}

export const ResumeItem = ({ title, value, color }: Props) => {
    return (
        <styled.Container>
            <styled.Title>{title}</styled.Title>
            <styled.Info color={color}>R$ {value}</styled.Info>
        </styled.Container>
    );
}