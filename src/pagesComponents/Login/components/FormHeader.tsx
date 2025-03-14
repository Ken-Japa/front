import { MatrixRainText } from "@/components/Effects/MatrixRainText";

export const FormHeader = () => {
    return (
        <div className="form-header text-center w-full">
            <MatrixRainText
                text="Bem vindo de volta"
                className="text-white text-2xl font-bold mb-6 inline-block"
            />
        </div>
    );
};