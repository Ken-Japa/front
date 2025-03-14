import Link from 'next/link';

export const ContactSupport = () => {
    return (
        <div className="mt-12 text-center bg-[#ffffff10] p-8 rounded-lg w-full">
            <h3 className="text-xl text-[#0D95F9] mb-4">Não encontrou o que procurava?</h3>
            <p className="text-white/90 mb-4">
                Nossa equipe de suporte está pronta para ajudar você
            </p>
            <Link href="/contato">
                <button className="px-6 py-2 bg-[#0D95F9] text-white rounded-lg hover:bg-[#0D95F9]/90 transition-all duration-300">
                    Contatar Suporte
                </button>
            </Link>
        </div>
    );
};