import Image from 'next/legacy/image'

const Instructions = () => {
  return (
    <section id="insurances" className="container mx-auto pb-10 w-full max-w-5xl">

      <div className="flex flex-nowrap items-center justify-left md:justify-center px-4 md:px-0 shadow-xl md:shadow-none py-8">
        <div className="w-auto pl-5">
          <h2 className="my-4 text-left lg:text-center text-3xl md:text-4xl lg:text-5xl text-colorBlue font-bold">
            See how easy it is to use the free text to HTML converter.
          </h2>
        </div>
      </div>

      <div className="w-full mb-6">
        <div className="h-1 mx-8 my-0 py-0 bg-gray-400 bg-opacity-25" />
      </div>

      <div className="flex flex-wrap text-gray-500">
        <div className="w-full px-8 text-sm md:text-md lg:text-lg">
          <div className="mx-auto align-middle">

            <h2>Welcome to the ConverText website! Below you will find information about the application's features and how to use them to convert your text to HTML with Custom Styles. Let's start:</h2>
            <br />
            <h3 className="font-bold">1. Text Insertion:</h3>
            <br />
            <p>In the provided text area, you can type or paste the text you want to convert to HTML.</p>
            <p>Make sure the text is entered correctly by checking for typos or formatting errors.</p>
            <br />
            <h3 className="font-bold">2. Add Line Breaks:</h3>
            <br />
            <p>The "Add skip lines" feature allows you to choose whether to add line breaks in the resulting HTML.</p>
            <h2 className="font-bold">Check the checkbox to enable adding line breaks.</h2>
            <p>You can choose between two options: "&lt;br /&gt;" (auto-close) or "&lt;br&gt;" (old).</p>
            <br />
            <h3 className="font-bold">3. Formatting with Tailwind CSS:</h3>
            <br />
            <p>Select the "Using Tailwind CSS" option to apply styles to HTML elements generated using the Tailwind CSS classes.</p>
            <p>Customize the styles of the &lt;h2&gt;, &lt;h3&gt; and &lt;p&gt; elements using the provided options.</p>
            <p>Make sure you enter the styles correctly, following Tailwind CSS conventions.</p>
            <br />
            <h3 className="font-bold">4. Formatting with Custom CSS:</h3>
            <br />
            <p>Select the "Use custom CSS" option to apply custom styles to the generated HTML elements.</p>
            <p>Enter the desired styles in the corresponding fields for the &lt;h2&gt;, &lt;h3&gt; and &lt;p&gt; elements.</p>
            <p>You can choose between two CSS syntaxes: standard or Next.js. Select the one that is most suitable for your case.</p>
            <br />
            <h3 className="font-bold">5. Minimum and Maximum Lengths:</h3>
            <br />
            <p>Set the minimum and maximum length for the &lt;h2&gt; and &lt;h3&gt; elements using the provided options.</p>
            <p>These settings help determine whether text should be formatted as &lt;h2&gt; or &lt;h3&gt; based on its length.</p>
            <br />
            <h3 className="font-bold">6. Special Character Encoding:</h3>
            <br />
            <p>The "Encode special characters in HTML" functionality allows you to choose whether to encode special characters present in the converted text to HTML.</p>
            <h2 className="font-bold">Check the checkbox to enable special character encoding.</h2>
            <br />
            <h3 className="font-bold">7. Conversion to HTML:</h3>
            <br />
            <p>Click the "Convert to HTML" button to start converting the text to HTML.</p>
            <p>The text will be processed according to the selected settings and the resulting HTML will be displayed in the output box.</p>
            <br />
            <h3 className="font-bold">8. Copy and Clear:</h3>
            <br />
            <p>After generating the HTML, you can copy it to the clipboard by clicking the "Copy HTML" button.</p>
            <p>If the copy is successful, you will see the message "HTML copied" on the button.</p>
            <p>If you want to clear input text, generated HTML and reset all settings, click "Clear" button.</p>
            <br />
            <p>Remember to review and adjust the settings to your needs before converting text to HTML. Take advantage of Text to HTML Converter and easily create your HTML code from your text!</p>
            <br />
            <h3 className="font-bold">No registration, totally FREE forever!</h3>

          </div>
        </div>
      </div>
    </section>
  )
}
export default Instructions