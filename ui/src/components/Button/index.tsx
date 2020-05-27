import { darken } from "polished"
import React, { MouseEvent, ReactNode } from "react"
import styled, { css } from "styled-components"

import { theme } from "theme"
import type { Color } from "types"
import { color } from "utils"

export const buttonDefaultProps = {
  size: "md",
  type: "button",
}

export type ButtonProps = {
  children: ReactNode
  disabled?: boolean
  onClick?: (event: MouseEvent) => void
  size: "sm" | "md"
  type: "button" | "submit"
}

type ThemeShape = {
  background: Color
  border: Color
  color: Color
}

export const getButtonSize = ({ size }: ButtonProps) =>
  size === "sm" ? "2rem" : "3rem"

const baseCss = css`
  display: flex;
  height: ${getButtonSize};
  padding: 0 1rem;
  align-items: center;
  background: transparent;
  border-radius: 0.25rem;
  border: 1px solid transparent;
  font-weight: 400;
  outline: 0;
  line-height: 1.15;
  transition: all 70ms cubic-bezier(0, 0, 0.38, 0.9);

  svg + span {
    margin-left: 0.5rem;
  }
`

const getTheme = (
  normal: ThemeShape,
  hover: ThemeShape,
  disabled: ThemeShape,
) =>
  css`
    background: ${color(normal.background)};
    color: ${color(normal.color)};
    border-color: ${color(normal.border)};

    &:focus {
      box-shadow: inset 0 0 0 1px ${color("draculaForeground")};
    }

    &:hover:not([disabled]) {
      background: ${color(hover.background)};
      color: ${color(hover.color)};
      border-color: ${color(hover.border)};
    }

    &:active:not([disabled]) {
      background: ${darken(0.1, theme.color[hover.background])};
    }

    &:disabled {
      cursor: not-allowed;
      background: ${color(disabled.background)};
      color: ${color(disabled.color)};
      border-color: ${color(disabled.border)};
    }
  `

const Primary = styled.button<ButtonProps>`
  ${baseCss};
  ${getTheme(
    {
      background: "draculaSelection",
      border: "draculaSelection",
      color: "draculaForeground",
    },
    {
      background: "draculaComment",
      border: "draculaSelection",
      color: "draculaForeground",
    },
    {
      background: "draculaSelection",
      border: "gray1",
      color: "gray1",
    },
  )};
`

export const PrimaryButton = ({ children, ...rest }: ButtonProps) => (
  <Primary {...rest}>{children}</Primary>
)

PrimaryButton.defaultProps = buttonDefaultProps

const Secondary = styled.button<ButtonProps>`
  ${baseCss};
  ${getTheme(
    {
      background: "draculaBackground",
      border: "draculaBackground",
      color: "draculaForeground",
    },
    {
      background: "draculaComment",
      border: "draculaComment",
      color: "draculaForeground",
    },
    {
      background: "draculaSelection",
      border: "gray1",
      color: "gray1",
    },
  )};
`

export const SecondaryButton = ({ children, ...rest }: ButtonProps) => (
  <Secondary {...rest}>{children}</Secondary>
)

SecondaryButton.defaultProps = buttonDefaultProps

const Success = styled.button<ButtonProps>`
  ${baseCss};
  ${getTheme(
    {
      background: "draculaSelection",
      border: "draculaSelection",
      color: "draculaGreen",
    },
    {
      background: "draculaComment",
      border: "draculaSelection",
      color: "draculaGreen",
    },
    {
      background: "draculaSelection",
      border: "gray1",
      color: "gray1",
    },
  )};
`

export const SuccessButton = ({ children, ...rest }: ButtonProps) => (
  <Success {...rest}>{children}</Success>
)

SuccessButton.defaultProps = buttonDefaultProps

const Error = styled.button<ButtonProps>`
  ${baseCss};
  ${getTheme(
    {
      background: "draculaSelection",
      border: "draculaSelection",
      color: "draculaRed",
    },
    {
      background: "draculaComment",
      border: "draculaSelection",
      color: "draculaRed",
    },
    {
      background: "draculaSelection",
      border: "gray1",
      color: "gray1",
    },
  )};
`

export const ErrorButton = ({ children, ...rest }: ButtonProps) => (
  <Error {...rest}>{children}</Error>
)

ErrorButton.defaultProps = buttonDefaultProps