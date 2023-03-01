import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import ToggleButton from "../toggle-button/toggle-button"

const ThemeSwitcher = () => {
  const themeIcon = (theme) => {
    return theme === "dark" ? (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.2499 16.22C15.9281 16.9789 14.3931 17.2814 12.8821 17.0806C11.3712 16.8799 9.96844 16.1871 8.89065 15.1093C7.81287 14.0315 7.12005 12.6287 6.91929 11.1178C6.71853 9.60684 7.02099 8.07184 7.77993 6.75C6.58475 7.16128 5.51384 7.86985 4.66795 8.80904C3.82206 9.74823 3.22899 10.8872 2.94454 12.1187C2.6601 13.3503 2.69362 14.6339 3.04196 15.849C3.3903 17.064 4.04201 18.1704 4.93577 19.0642C5.82953 19.9579 6.93596 20.6096 8.15098 20.958C9.366 21.3063 10.6497 21.3398 11.8812 21.0554C13.1128 20.7709 14.2517 20.1779 15.1909 19.332C16.1301 18.4861 16.8386 17.4152 17.2499 16.22ZM12.7499 7C16.9999 7 16.9999 2.75 16.9999 2.75C16.9999 2.75 16.9999 7 21.2499 7C16.9999 7 16.9999 11.25 16.9999 11.25C16.9999 11.25 16.9999 7 12.7499 7Z"
          fill="#3F3F46"
          stroke="#71717A"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ) : (
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.29321 12.8711C8.29321 11.7439 8.74098 10.6629 9.53801 9.86589C10.335 9.06886 11.416 8.62109 12.5432 8.62109C13.6704 8.62109 14.7514 9.06886 15.5484 9.86589C16.3454 10.6629 16.7932 11.7439 16.7932 12.8711C16.7932 13.9983 16.3454 15.0793 15.5484 15.8763C14.7514 16.6733 13.6704 17.1211 12.5432 17.1211C11.416 17.1211 10.335 16.6733 9.53801 15.8763C8.74098 15.0793 8.29321 13.9983 8.29321 12.8711Z"
          fill="#F4F4F5"
          stroke="#71717A"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.5432 3.62109V5.12109M21.7932 12.8711H20.2932M19.0842 19.4121L18.0242 18.3521M19.0842 6.33009L18.0242 7.39009M12.5432 20.6211V22.1211M4.79321 12.8711H3.29321M7.06321 7.39109L6.00221 6.33009M7.06321 18.3511L6.00221 19.4121"
          stroke="#71717A"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    )
  }

  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) =>
        /** the initial render happens in the cloud at compile-time, so colorMode will initially be undefined.
         * Every user gets the same HTML, and that HTML will always come with an unchecked checkbox.
         * Our best bet is to defer rendering of the toggle until after the React app knows what the colorMode should be.
         */
        theme == null ? null : (
          <ToggleButton
            isChecked={theme === "dark"}
            icon={themeIcon(theme)}
            onChange={(isChecked) => toggleTheme(isChecked ? "dark" : "light")}
          />
        )
      }
    </ThemeToggler>
  )
}

export default ThemeSwitcher
