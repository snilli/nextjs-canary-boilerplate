import {render, RenderOptions, RenderResult} from '@testing-library/react'
import {ReactElement} from 'react'
// import { ThemeProvider } from "my-ui-lib"
// import { TranslationProvider } from "my-i18n-lib"
// import defaultStrings from "i18n/en-x-default"

// const Providers = (prop: Prop): FunctionComponent<any> => {
//
//   return (
//       <div>
//           {prop.children}
//       < /div>
//   )
// //   return (
// //     <ThemeProvider theme="light">
// //       <TranslationProvider messages={defaultStrings}>
// //         {children}
// //       </TranslationProvider>
// //     </ThemeProvider>
// //   )
// }

const customRender = (ui: ReactElement, options: RenderOptions = {}): RenderResult =>
    render(ui, options)
// render(ui, {wrapper: Providers, ...options})

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}
