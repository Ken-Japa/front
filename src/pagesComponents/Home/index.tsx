import { Plans } from "./Plans";
import { Questions } from "./Questions";
import { Welcome } from "./Welcome";
import { MatrixRainText } from "@/components/Effects/MatrixRainText";

interface Props {
    showAnimation: boolean;
}

export const Home = ({ showAnimation }: Props) => {
    return (
        <main>
            <section className="min-h-screen flex items-center">
                <div className="container mx-auto">
                    <div>
                        <Welcome />
                        <Plans />
                        <Questions />
                    </div>
                </div>
            </section>
        </main>
    );
};