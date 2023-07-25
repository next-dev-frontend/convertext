import { useState } from 'react';

const ArticleConverter = () => {
  const [articleText, setArticleText] = useState('');
  const [htmlArticle, setHtmlArticle] = useState('');
  const [useBrTag, setUseBrTag] = useState(true);
  const [brTagOption, setBrTagOption] = useState('<br />');
  const [copied, setCopied] = useState(false);
  const [cleared, setCleared] = useState(false);
  const [useTailwindCSS, setUseTailwindCSS] = useState(true);
  const [tailwindCSSOption, setTailwindCSSOption] = useState('className');
  const [cssSyntaxOption, setCssSyntaxOption] = useState('standard');
  const [transformH2ToH1, setTransformH2ToH1] = useState(false);
  const [h1Style, setH1Style] = useState('');
  const [h2Style, setH2Style] = useState('');
  const [h3Style, setH3Style] = useState('');
  const [pStyle, setPStyle] = useState('');
  const [h2Length1, setH2Length1] = useState(40);
  const [h2Length2, setH2Length2] = useState(70);
  const [h3Length, setH3Length] = useState(39);
  const [encodeCharacters, setEncodeCharacters] = useState(true);

  const encodeSpecialCharacters = (text) => {
    if (encodeCharacters) {
      return text
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/¢/g, '&cent;')
        .replace(/£/g, '&pound;')
        .replace(/¥/g, '&yen;')
        .replace(/€/g, '&euro;')
        .replace(/©/g, '&copy;')
        .replace(/®/g, '&reg;')
        .replace(/™/g, '&trade;')
        .replace(/×/g, '&times;')
        .replace(/÷/g, '&divide;')
        .replace(/¡/g, '&iexcl;')
        .replace(/¿/g, '&iquest;')
        .replace(/§/g, '&sect;')
        .replace(/¶/g, '&para;')
        .replace(/·/g, '&middot;')
        .replace(/…/g, '&hellip;')
        .replace(/—/g, '&mdash;')
        .replace(/–/g, '&ndash;')
        .replace(/«/g, '&laquo;')
        .replace(/»/g, '&raquo;')
        .replace(/µ/g, '&micro;')
        .replace(/±/g, '&plusmn;')
        .replace(/°/g, '&deg;')
        .replace(/½/g, '&frac12;')
        .replace(/¼/g, '&frac14;')
        .replace(/¾/g, '&frac34;')
        .replace(/@/g, '&commat;')
        .replace(/\//g, '&sol;')
        .replace(/\\/g, '&bsol;')
        .replace(/{/g, '&lcub;')
        .replace(/}/g, '&rcub;')
        .replace(/\[/g, '&lsqb;')
        .replace(/]/g, '&rsqb;')
        .replace(/|/g, '&verbar;')
        .replace(/:/g, '&colon;')
        .replace(/;/g, '&semi;')
        .replace(/,/g, '&comma;')
        .replace(/\$/g, '&dollar;')
        .replace(/%/g, '&percnt;')
        .replace(/#/g, '&num;')
        .replace(/_/g, '&lowbar;')
        .replace(/\^/g, '&circ;')
        .replace(/`/g, '&grave;')
        .replace(/~/g, '&tilde;')
        .replace(/\\/g, '&bsol;')
        .replace(/=/g, '&equals;')
        .replace(/!/g, '&excl;')
        .replace(/\?/g, '&quest;')
        .replace(/\*/g, '&ast;');
    } else {
      return text;
    }
  };

  const convertToHtml = () => {
    const lines = articleText.split('\n');

    let isFirstH2Generated = false;

    let formattedLines = lines.map((line) => {
      const formattedLine = line.trim();
      const shouldAddH2 = formattedLine.length >= h2Length1 && formattedLine.length <= h2Length2;
      const shouldAddH3 = formattedLine.length <= h3Length;

      if (formattedLine === '') {
        // Blank line, add <br /> or <br>
        return useBrTag ? brTagOption : '';
      }

      let paragraphElement = '';

      if (useTailwindCSS) {

        if (shouldAddH2) {
          if (transformH2ToH1 && !isFirstH2Generated) {
            isFirstH2Generated = true;
            if (h1Style !== '') {
              paragraphElement += `<h1 ${tailwindCSSOption}="${h1Style}">${encodeSpecialCharacters(formattedLine)}</h1>`;
            } else {
              paragraphElement += `<h1>${encodeSpecialCharacters(formattedLine)}</h1>`;
            }
          } else {
            if (h2Style !== '') {
              paragraphElement += `<h2 ${tailwindCSSOption}="${h2Style}">${encodeSpecialCharacters(formattedLine)}</h2>`;
            } else {
              paragraphElement += `<h2>${encodeSpecialCharacters(formattedLine)}</h2>`;
            }
          }
        } else if (shouldAddH3) {
          if (h3Style !== '') {
            paragraphElement += `<h3 ${tailwindCSSOption}="${h3Style}">${encodeSpecialCharacters(formattedLine)}</h3>`;
          } else {
            paragraphElement += `<h3>${encodeSpecialCharacters(formattedLine)}</h3>`;
          }
        } else {
          if (pStyle !== '') {
            paragraphElement += `<p ${tailwindCSSOption}="${pStyle}">${encodeSpecialCharacters(formattedLine)}</p>`;
          } else {
            paragraphElement += `<p>${encodeSpecialCharacters(formattedLine)}</p>`;
          }
        }
      } else {
        if (shouldAddH2) {
          let cssStyle = '';

          if (cssSyntaxOption === 'standard') {
            if (transformH2ToH1 && !isFirstH2Generated) {
              if (h1Style !== '') {
                cssStyle = ` style="${h1Style}"`;
              } else {
                cssStyle = ``;
              }
            } else {
              if (h2Style !== '') {
                cssStyle = ` style="${h2Style}"`;
              } else {
                cssStyle = ``;
              }
            }


          } else if (cssSyntaxOption === 'nextjs') {

            if (transformH2ToH1 && !isFirstH2Generated) {
              if (h1Style !== '') {
                cssStyle = ` style={{${h1Style}}}`;
              } else {
                cssStyle = ``;
              }
            } else {
              if (h2Style !== '') {
                cssStyle = ` style={{${h2Style}}}`;
              } else {
                cssStyle = ``;
              }
            }

          }

          if (transformH2ToH1 && !isFirstH2Generated) {
            isFirstH2Generated = true;
            paragraphElement += `<h1${cssStyle}>${encodeSpecialCharacters(formattedLine)}</h1>`;
          } else {
            paragraphElement += `<h2${cssStyle}>${encodeSpecialCharacters(formattedLine)}</h2>`;
          }
        } else if (shouldAddH3) {
          let cssStyle = '';

          if (cssSyntaxOption === 'standard') {
            if (h3Style !== '') {
              cssStyle = ` style="${h3Style}"`;
            } else {
              cssStyle = ``;
            }
          } else if (cssSyntaxOption === 'nextjs') {
            if (h3Style !== '') {
              cssStyle = ` style={{${h3Style}}}`;
            } else {
              cssStyle = ``;
            }
          }

          paragraphElement += `<h3${cssStyle}>${encodeSpecialCharacters(formattedLine)}</h3>`;
        } else {
          let cssStyle = '';

          if (cssSyntaxOption === 'standard') {
            if (pStyle !== '') {
              cssStyle = ` style="${pStyle}"`;
            } else {
              cssStyle = ``;
            }
          } else if (cssSyntaxOption === 'nextjs') {
            if (pStyle !== '') {
              cssStyle = ` style={{${pStyle}}}`;
            } else {
              cssStyle = ``;
            }
          }

          paragraphElement += `<p${cssStyle}>${encodeSpecialCharacters(formattedLine)}</p>`;
        }
      }

      return paragraphElement;
    }).join('\n');

    setHtmlArticle(formattedLines);
    setCleared(false);
    setCopied(false);
  };

  const [isCopied, setIsCopied] = useState(false);

  const copyHtmlToClipboard = () => {
    navigator.clipboard.writeText(htmlArticle);
    setCopied(true);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const clearHtml = () => {
    setHtmlArticle('');
    setArticleText('');
    setCleared(true);
    setCopied(false);
  };

  const clearSettings = () => {
    setUseBrTag(true);
    setBrTagOption('<br />');
    setUseTailwindCSS(true);
    setTailwindCSSOption('className');
    setCssSyntaxOption('standard');
    setTransformH2ToH1(false);
    setH1Style('');
    setH2Style('');
    setH3Style('');
    setPStyle('');
    setH2Length1(40);
    setH2Length2(70);
    setH3Length(39);
    setEncodeCharacters(true);
  };


  const isHtmlGenerated = htmlArticle !== '';

  return (
    <div className="select-none flex flex-col mx-auto w-full max-w-5xl p-6 pb-12 space-y-4">

      <label className="text-left text-3xl md:text-4xl lg:text-5xl text-colorBlue font-bold">
        Input
      </label>

      <textarea
        className="p-2 pb-4 border-2 border-colorBlue rounded"
        id='textArea'
        placeholder="Type or paste the text here"
        value={articleText}
        rows={5}
        onChange={(e) => setArticleText(e.target.value)}
      />

      <div className="space-y-4">
        <details className="group border rounded border-gray-300 bg-gray-50 px-2 py-2">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-4">
            <p className="text-lg font-medium text-gray-900">
              Settings
            </p>
            <span className="shrink-0 rounded-full bg-blue-600 hover:bg-blue-700 p-1.5 text-white sm:p-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            </span>
          </summary>

          <label htmlFor="brChoice" className="flex items-center border rounded border-gray-300 p-4 bg-gray-200">
            <input
              type="checkbox"
              id="brChoice"
              checked={useBrTag}
              onChange={() => setUseBrTag(!useBrTag)}
              className="mr-2"
            />
            Add line breaks &lt;br&gt;
          </label>

          {useBrTag && (
            <div className="flex items-center p-2 py-4">
              <input
                type="radio"
                id="brChoiceSelfClosing"
                value="<br />"
                checked={brTagOption === '<br />'}
                onChange={(e) => setBrTagOption(e.target.value)}
                className="mr-2"
              />
              <label htmlFor="brChoiceSelfClosing" className="mr-4">Use &lt;br /&gt;</label>

              <input
                type="radio"
                id="brChoice2"
                value="<br>"
                checked={brTagOption === '<br>'}
                onChange={(e) => setBrTagOption(e.target.value)}
                className="mr-2"
              />
              <label htmlFor="brChoice2">Use &lt;br&gt;</label>
            </div>
          )}

          <div className="flex items-center border rounded border-gray-300 p-4 bg-gray-200">
            <input
              type="radio"
              id="tailwindCSSChoice"
              value="tailwind"
              checked={useTailwindCSS}
              onChange={() => {
                setUseTailwindCSS(true);
              }}
              className="mr-2"
            />
            <label htmlFor="tailwindCSSChoice" className="mr-4">Use Tailwind CSS</label>
            <input
              type="radio"
              id="customCSSChoice"
              value="custom"
              checked={!useTailwindCSS}
              onChange={() => {
                setUseTailwindCSS(false);
              }}
              className="mr-2"
            />
            <label htmlFor="customCSSChoice">Use custom CSS</label>
          </div>

          {useTailwindCSS ? (
            <div>
              <div className="flex items-center p-2 py-4">
                <label htmlFor="tailwindCSSOption">Tailwind syntax options:</label>
                <select
                  id="tailwindCSSOption"
                  value={tailwindCSSOption}
                  onChange={(e) => setTailwindCSSOption(e.target.value)}
                  className="ml-2 border rounded p-2"
                >
                  <option value="class">class</option>
                  <option value="className">className</option>
                </select>
              </div>

              <div className="flex items-center p-2 space-x-2">
                <input
                  type="checkbox"
                  id="transformH2ToH1"
                  checked={transformH2ToH1}
                  onChange={() => setTransformH2ToH1(!transformH2ToH1)}
                  className="ml-2"
                />
                <label htmlFor="transformH2ToH1">Transform first &lt;h2&gt; to &lt;h1&gt;</label>
              </div>
              {transformH2ToH1 && (
                <div className="flex items-center p-2 space-x-2">
                  <label htmlFor="h2Style">&lt;h1&gt;</label>
                  <input
                    type="text"
                    id="h1Style"
                    value={h1Style}
                    placeholder="font-bold text-blue-700"
                    onChange={(e) => setH1Style(e.target.value)}
                    className="w-full p-1 border border-gray-300 rounded"
                  />
                </div>
              )}

              <div className="flex items-center p-2 space-x-2">
                <label htmlFor="h2Style">&lt;h2&gt;</label>
                <input
                  type="text"
                  id="h2Style"
                  value={h2Style}
                  placeholder="font-bold text-gray-700"
                  onChange={(e) => setH2Style(e.target.value)}
                  className="w-full p-1 border border-gray-300 rounded"
                />
              </div>
              <div className="flex items-center p-2 space-x-2">
                <label htmlFor="h3Style">&lt;h3&gt;</label>
                <input
                  type="text"
                  id="h3Style"
                  value={h3Style}
                  placeholder="font-bold text-gray-700"
                  onChange={(e) => setH3Style(e.target.value)}
                  className="w-full p-1 border border-gray-300 rounded"
                />
              </div>
              <div className="flex items-center p-2 pb-8 space-x-2">
                <label htmlFor="pStyle">&lt;p&gt;</label>
                <input
                  type="text"
                  id="pStyle"
                  value={pStyle}
                  placeholder="text-gray-700"
                  onChange={(e) => setPStyle(e.target.value)}
                  className="w-full p-1 border border-gray-300 rounded"
                />
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center p-2 py-4">
                <label htmlFor="cssSyntaxOption">CSS syntax options:</label>
                <select
                  id="cssSyntaxOption"
                  value={cssSyntaxOption}
                  onChange={(e) => setCssSyntaxOption(e.target.value)}
                  className="ml-2 border rounded p-2"
                >
                  <option value="standard">Standard</option>
                  <option value="nextjs">React</option>
                </select>
              </div>

              <div className="flex items-center p-2 space-x-2">
                <input
                  type="checkbox"
                  id="transformH2ToH1"
                  checked={transformH2ToH1}
                  onChange={() => setTransformH2ToH1(!transformH2ToH1)}
                  className="ml-2"
                />
                <label htmlFor="transformH2ToH1">Transform first &lt;h2&gt; to &lt;h1&gt;</label>
              </div>
              {transformH2ToH1 && (
                <div className="flex items-center p-2 space-x-2">
                  <label htmlFor="h2Style">&lt;h1&gt;</label>
                  <input
                    type="text"
                    id="h1Style"
                    value={h1Style}
                    placeholder="font-bold text-blue-700"
                    onChange={(e) => setH1Style(e.target.value)}
                    className="w-full p-1 border border-gray-300 rounded"
                  />
                </div>
              )}

              <div className="flex items-center p-2 space-x-2">
                <label htmlFor="h2Style">&lt;h2&gt;</label>
                <input
                  type="text"
                  id="h2Style"
                  value={h2Style}
                  placeholder="color:blue, background-color:powderblue"
                  onChange={(e) => setH2Style(e.target.value)}
                  className="w-full p-1 border border-gray-300 rounded"
                />
              </div>

              <div className="flex items-center p-2 space-x-2">
                <label htmlFor="h3Style">&lt;h3&gt;</label>
                <input
                  type="text"
                  id="h3Style"
                  value={h3Style}
                  placeholder="color:blue, background-color:powderblue"
                  onChange={(e) => setH3Style(e.target.value)}
                  className="w-full p-1 border border-gray-300 rounded"
                />
              </div>

              <div className="flex items-center p-2 pb-8 space-x-2">
                <label htmlFor="pStyle">&lt;p&gt;</label>
                <input
                  type="text"
                  id="pStyle"
                  value={pStyle}
                  placeholder="color:blue, background-color:powderblue"
                  onChange={(e) => setPStyle(e.target.value)}
                  className="w-full p-1 border border-gray-300 rounded"
                />
              </div>
            </div>
          )}

          <div className="flex flex-wrap items-center border rounded border-gray-300 p-2 bg-gray-200">
            <div className="items-center p-2 space-x-2">
              <label htmlFor="h2Length1">Minimum length for &lt;h2&gt;:</label>
              <input
                type="number"
                id="h2Length1"
                value={h2Length1}
                onChange={(e) => setH2Length1(Number(e.target.value))}
                className="p-1 w-16 border border-gray-300 rounded"
              />
            </div>

            <div className="items-center p-2 space-x-2">
              <label htmlFor="h2Length2">Maximum length for &lt;h2&gt;:</label>
              <input
                type="number"
                id="h2Length2"
                value={h2Length2}
                onChange={(e) => setH2Length2(Number(e.target.value))}
                className="p-1 w-16 border border-gray-300 rounded"
              />
            </div>
          </div>

          <div className="flex items-center border border-gray-300 rounded p-4 bg-gray-200 space-x-2">
            <label htmlFor="h3Length">Maximum length for &lt;h3&gt;:</label>
            <input
              type="number"
              id="h3Length"
              value={h3Length}
              onChange={(e) => setH3Length(Number(e.target.value))}
              className="p-1 w-16 border border-gray-300 rounded"
            />
          </div>

          <div className="flex items-center p-4">
            <label htmlFor="encodeCharacters">Encode special characters in HTML</label>
            <input
              type="checkbox"
              id="encodeCharacters"
              checked={encodeCharacters}
              onChange={() => setEncodeCharacters(!encodeCharacters)}
              className="ml-2"
            />
          </div>

          <div className="flex items-center p-4">
            <button
              className="px-4 py-2 text-md md:text-xl text-white font-bold rounded bg-gray-600 hover:bg-gray-700"
              onClick={clearSettings}
            >
              Reset Settings
            </button>
          </div>

        </details>
      </div>

      <button
        className="px-4 py-4 text-md md:text-xl text-white font-bold rounded bg-blue-600 hover:bg-blue-700"
        onClick={convertToHtml}
      >
        Convert to HTML
      </button>

      {isHtmlGenerated && (
        <>
          <button
            className="px-4 py-4 text-md md:text-xl text-white font-bold rounded bg-green-600 hover:bg-green-700"
            onClick={copyHtmlToClipboard}
          >
            {isCopied ? 'Copied!' : 'Copy Generated HTML'}
          </button>

          <button
            className="px-4 py-2 text-md md:text-xl text-white font-bold rounded bg-red-600 hover:bg-red-700"
            onClick={clearHtml}
          >
            Clear
          </button>
        </>
      )}

      {isHtmlGenerated && (
        <div className="w-full max-w-full overflow-x-auto py-6">
          <div className="text-left pb-2 text-3xl md:text-4xl lg:text-5xl text-colorBlue font-bold">
            Converted Code
          </div>

          <pre
            className="p-2 border-2 border-colorBlue rounded select-text"
            style={{ whiteSpace: 'pre-wrap', overflowX: 'auto' }}
          >
            {htmlArticle}
          </pre>
          <br />
          <div className="w-full h-auto rounded bg-green-600 hover:bg-green-700 text-center">
            <button
              className="px-4 py-4 text-md md:text-xl text-white font-bold"
              onClick={copyHtmlToClipboard}
            >
              {isCopied ? 'Copied!' : 'Copy Generated HTML'}
            </button>
          </div>


        </div>
      )}
    </div>
  );
};

export default ArticleConverter;