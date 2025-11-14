import React from "react";
import type { JSX } from "react";

type MaxWidth =
  | "none"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl";

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  /** Elemento HTML que será usado (div, main, section...) */
  as?: keyof JSX.IntrinsicElements;
  /** Largura máxima do container — mapeado para classes Tailwind */
  maxWidth?: MaxWidth;
  /** Centralizar conteúdo horizontalmente */
  center?: boolean;
  /** Preenchimento vertical (py) em unidades Tailwind (ex: 'py-8') */
  py?: string;
  /** Preenchimento horizontal (px) em unidades Tailwind (ex: 'px-4') */
  px?: string;
  /** Largura total (full) mesmo com maxWidth definido */
  fluid?: boolean;
}

const maxWidthMap: Record<MaxWidth, string> = {
  none: "max-w-none",
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
  "8xl": "max-w-4/5",
};

/**
 * Container
 * Uso simples e versátil para layout com Tailwind.
 * - Suporta different elements via `as`
 * - `maxWidth` controla a largura máxima responsiva
 * - `center` centraliza o conteúdo horizontalmente
 * - `fluid` ignora o maxWidth e usa largura total
 *
 * Exemplos:
 * <Container maxWidth="5xl" center py="py-12" px="px-6">...</Container>
 * <Container as="main" fluid className="bg-white">...</Container>
 */
export default function Container({
  as: Component = "div",
  children,
  maxWidth = "5xl",
  center = true,
  py = "py-8",
  px = "px-4",
  fluid = false,
  className = "",
  ...rest
}: ContainerProps) {
  const maxWClass = fluid ? "w-full" : maxWidthMap[maxWidth];
  const centerClass = center ? "mx-auto" : "";

  // classes base: largura responsiva, padding e utilitários comuns
  const base = [
    // largura e centralização
    maxWClass,
    centerClass,
    // responsividade: garantir width 100% até o max
    "w-full",
    // padding default (pode ser sobrescrito via props px/py)
    py,
    px,
    // permitir sobrescrever via className
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    // @ts-expect-error - permitir passar tags arbitrárias compatíveis com JSX.IntrinsicElements
    <Component className={base} {...rest}>
      {children}
    </Component>
  );
}
