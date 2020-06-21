   <h1>Styling</h1>
    <p>
      If you ever end up writing your own CSS, it&#x27;s worth to know several
      things.
    </p>
    <h2>Mobile first approach</h2>
    <p>
      We try to write frontend code for mobile and then use media queries for
      bigger breakpoints. You can read more about it in Responsiveness section.
    </p>
    <h2>SCSS</h2>
    <p>
      We use SCSS as a CSS preprocessor. So you can use all the magic that SCSS
      offers.
    </p>
    <h2>CSS Variables</h2>
    <p>
      Even though we use SCSS, we prefer to use native CSS variables because
      they are more flexible. You should be able to view all variables we have
      in

      <code>app/assets/stylesheets/config/_variables.scss</code>

      file. Since
      this file is imported everywhere, you should not need to import that by
      your own.
    </p>
    <p>
      Fun fact: there&#x27;s one exception to that: responsiveness breakpoints.
      Since you can&#x27;t use a CSS variables when defining a media query, this
      is the only case when we use SCSS variables. It&#x27;s just easier.
    </p>
    <h2>Themes</h2>
    <p>
      DEV support multiple themes so you should always test your work against
      all themes. We have a file with all color variables and each theme has its
      own too.
    </p>
    <ul>
      <li>
        Default theme:

        <code>app/assets/stylesheets/config/_colors.scss</code>
      </li>
    </ul>
    <ul>
      <li>
        Other themes (minimal, night, pink, hacker):

        <code>app/assets/stylesheets/themes</code>
      </li>
    </ul>
    <h2>Import.scss</h2>
    <p>
      When you create a new SCSS file you may want to import one file at the top
      of your new file:

      <code>app/assets/stylesheets/config/_import.scss</code>

      - it contains some helpers as well as breakpoint variables I mentioned
      earlier.
    </p>
    <h2>Folders</h2>
    <p>
      You can access all of the SCSS files in

      <code>app/assets/stylesheets</code>

      folder.
    </p>
    <ul>
      <li>
        <code>/base</code>

        - this folder contains some fundamental styling for
        layouts, resets and icons.
      </li>
    </ul>
    <ul>
      <li>
        <code>/components</code>

        - this folder contains separate SCSS file for
        each component we have... tags, buttons, forms, ...
      </li>
    </ul>
    <ul>
      <li>
        <code>/config</code>

        - this folder contains bunch of configuration
        files. These are worth explaining:
        <ul>
          <li>
            <code>_colors.scss</code>

            - I mentioned it couple lines above - it
            contains all color variables used in Crayons.
          </li>
        </ul>
        <ul>
          <li>
            <code>_generator.scss</code>

            - it&#x27;s basically a huge SCSS mixin
            generating ALL our utility classes.
          </li>
        </ul>
        <ul>
          <li>
            <code>_import.scss</code>

            - it contains bunch of helpers for SCSS as
            well as media breakpoints variables.
          </li>
        </ul>
        <ul>
          <li>
            <code>_variables.scss</code>

            - it contains all CSS native variables.
          </li>
        </ul>
      </li>
    </ul>
    <ul>
      <li>
        <code>/themes</code>

        - this folder contains color declarations for other
        themes.
      </li>
    </ul>
    <ul>
      <li>
        Other folders and top level files are mostly legacy... :) We still use
        them, but slowly trying to move all the styling to appropriate
        Crayons-related files. Exceptions:
        <ul>
          <li>
            <code>crayons.scss</code>

            - this is one importing everything
            Crayons-related like variables, components styling, utility classes
            etc.
          </li>
        </ul>
        <ul>
          <li>
            <code>minimal.scss</code>

            - this one is actually one of the main
            stylesheets from pre-Crayons era. It imports everything basically
            :).
          </li>
        </ul>
      </li>
    </ul>