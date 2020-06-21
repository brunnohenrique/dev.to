<h1>Crayons</h1>
    <p>
      Crayons is the design system of DEV. It will provide you everything you
      need to quickly design, build, and ship coherent experience and style
      across DEV.
    </p>
    <p>
      In other words - Crayons defines our design language and frontend
      approach.
    </p>
    <p>Crayons is a combination of:</p>
    <ul>
      <li>
        <strong>Components</strong>

        to create features or views. Think of
        buttons, form elements, tabs, etc.
      </li>
    </ul>
    <ul>
      <li>
        <strong>Utility-first CSS classes</strong>

        enabling developers to create
        frontend code almost without touching CSS.

        <a href="https://www.notion.so/devto/Utility-First-CSS-19a8c3a74b3d4d23a802923be206aba9">
          Click here to read more about Utility-first CSS
        </a>
        .
      </li>
    </ul>
    <p />
    <h2>How to best use Crayons?</h2>
    <p>
      Imagine you have to build a new feature or a view. A designer will likely
      give you a mockup and there are several scenarios that can happen:
    </p>
    <ul>
      <li>
        <strong>Mockup uses existing components.</strong>

        In that case you
        should be able to simply copy and paste code responsible for rendering
        specific component and call it a day.
      </li>
    </ul>
    <ul>
      <li>
        <strong>
          Mockup uses existing components but they look customized a little.
        </strong>

        You have two options:
        <ul>
          <li>
            Copy and paste component code and customize it with

            <em>utility-first classes</em>
            . It makes sense if you need to make
            small changes like increase padding, make border thicker etc...
          </li>
        </ul>
        <ul>
          <li>
            Consider extending existing component to support your case. This is
            more time-consuming solution because you should make sure it&#x27;s
            context-agnostic - so it should work in any context, not only for
            your feature.

          </li>
        </ul>
      </li>
    </ul>
    <ul>
      <li>
        <strong>Mockup doesn&#x27;t use existing components.</strong>

        Looks like
        you will have to build everything from scratch. And you have two options
        again:
        <ul>
          <li>
            You may either build it using

            <em>utility-first classes</em>
            , so you
            don&#x27;t have to be worried where to put CSS or how to structure
            it.

            <em>Utility-first classes</em>

            should let you not only apply
            simple customizations like padding etc. but they should let you also
            create entire views.
          </li>
        </ul>
        <ul>
          <li>
            You can split your work - try to build some things with

            <em>utility-first classes</em>

            (so you can move on faster), but also
            consider building actual reusable components.
          </li>
        </ul>
      </li>
    </ul>
    <ul>
      <li>
        <strong>It&#x27;s something completely new.</strong>

        You probably think
        you&#x27;ll have to write tons of custom CSS and import your .scss file
        somewhere. Well, hopefully not. As mentioned earlier,

        <em>utility-first classes</em>

        let you create even complex components
        without a single line of CSS. From a design point of view, this is the
        preferred way to write frontend code instead of creating new SCSS files.
        Every line of CSS you write, the more CSS we have to maintain, the more
        our users have to download, and the more bytes we have to host.
      </li>
    </ul>