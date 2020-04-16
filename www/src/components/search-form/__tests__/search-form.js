import React from "react"
import { render, wait, fireEvent, getByRole } from "@testing-library/react"
import { ThemeProvider } from "theme-ui"
import { I18nProvider } from "../../I18nContext"

import theme from "../../../gatsby-plugin-theme-ui"
import SearchForm from "../search-form"

test(`it initializes algola docsearch on form click, and keeps focus`, async () => {
  const { container, getByRole } = render(
    <I18nProvider>
      <ThemeProvider theme={theme}>
        <SearchForm />
      </ThemeProvider>
    </I18nProvider>
  )

  const input = container.querySelector(`#doc-search`)

  // triggering docsearch initialization
  fireEvent.click(input)

  // docseach is lazy loaded, so we have to wait for it
  await wait(() => expect(window.docsearch).not.toBeUndefined())

  // checking if docsearch has been initialized, we can confirm it if html
  // with role `listbox` is injected
  expect(getByRole(`listbox`)).toBeInTheDocument()

  // checking that input still has a focus
  expect(document.activeElement).toEqual(input)
})

test(`it initializes algola docsearch on form mouse hover, and keeps focus`, async () => {
  const { container, getByRole } = render(
    <I18nProvider>
      <ThemeProvider theme={theme}>
        <SearchForm />
      </ThemeProvider>
    </I18nProvider>
  )

  const input = container.querySelector(`#doc-search`)

  // triggering docsearch initialization
  fireEvent.mouseOver(input)

  // docseach is lazy loaded, so we have to wait for it
  await wait(() => expect(window.docsearch).not.toBeUndefined())

  // checking if docsearch has been initialized, we can confirm it if html
  // with role `listbox` is injected
  expect(getByRole(`listbox`)).toBeInTheDocument()

  // checking that input still has a focus
  expect(document.activeElement).toEqual(input)
})

test(`it initializes algola docsearch on form focus, and keeps focus`, async () => {
  const { container, getByRole } = render(
    <I18nProvider>
      <ThemeProvider theme={theme}>
        <SearchForm />
      </ThemeProvider>
    </I18nProvider>
  )

  const input = container.querySelector(`#doc-search`)

  // triggering docsearch initialization
  input.focus()

  // docseach is lazy loaded, so we have to wait for it
  await wait(() => expect(window.docsearch).not.toBeUndefined())

  // checking if docsearch has been initialized, we can confirm it if html
  // with role `listbox` is injected
  expect(getByRole(`listbox`)).toBeInTheDocument()

  // checking that input still has a focus
  expect(document.activeElement).toEqual(input)
})
