import { useEffect, useState } from 'react';

const phrases = [
  'Estrategia, contenido y visión financiera.',
  'Marketing que hace crecer tu marca.',
  'Soluciones claras para emprendedores.',
  'Educación financiera paso a paso.',
];

const TypewriterText = ({ className = '' }) => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];

    if (!deleting && text === current) {
      const pause = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(pause);
    }

    if (deleting && text === '') {
      setDeleting(false);
      setPhraseIndex((phraseIndex + 1) % phrases.length);
      return;
    }

    const tick = setTimeout(() => {
      setText(
        deleting
          ? current.slice(0, text.length - 1)
          : current.slice(0, text.length + 1)
      );
    }, deleting ? 35 : 65);

    return () => clearTimeout(tick);
  }, [text, deleting, phraseIndex]);

  return (
    <span className={className} aria-live="polite">
      {text}
      <span className="text-emerald-light animate-pulse">|</span>
    </span>
  );
};

export default TypewriterText;
