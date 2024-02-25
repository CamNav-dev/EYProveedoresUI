import Image from 'next/image';

type ButtonProps = {
  label: string;
  href?: string;
  variant: string;
  icon?: string; // Nuevo prop para el ícono
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, href, variant, icon, onClick }) => {
  const content = (
    <>
      {icon && <Image src={icon} alt="" width={24} height={24} />}
      {label}
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`p-button font-bold ${variant}`}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={`p-button font-bold ${variant}`}>
      {content}
    </button>
  );
};

export default Button;
