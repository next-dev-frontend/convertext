import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  LineShareButton,
  LineIcon,
  PinterestShareButton,
  PinterestIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
  LinkedinShareButton,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon,
  EmailShareButton,
  EmailIcon,
} from 'next-share'

function SocialShare() {
  return (
    <div id="shareButtons" className="mx-auto px-8 py-8 w-full max-w-5xl">

      <div className="flex flex-wrap text-gray-700">
        <div className="w-full text-md md:text-xl lg:text-2xl">
          <div className="mx-auto align-middle">
            <p className="text-xl font-semibold mb-4">Share this website</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap md:flex-no-wrap">
        <div className="px-1">
          <FacebookShareButton
            url={'https://convertext.vercel.app'}
            quote={'Convert Text to Html with CSS ou Tailwind.'}
            hashtag={'#converttexttohtml #texttohtml #converttext'}
            blankTarget='true'
          >
            <FacebookIcon size={46} round />
          </FacebookShareButton>
        </div>

        <div className="px-1">
          <LineShareButton
            url={'https://convertext.vercel.app'}
            title={'Convert Text to Html with CSS ou Tailwind.'}
            blankTarget='true'
          >
            <LineIcon size={46} round />
          </LineShareButton>
        </div>

        <div className="px-1">
          <PinterestShareButton
            url={'https://convertext.vercel.app'}
            media={'Convert Text to Html with CSS ou Tailwind.'}
            description="Welcome to the ConverText website! Below you will find information about the application's features and how to use them to convert your text to HTML with Custom Styles. Let's start."
            blankTarget='true'
          >
            <PinterestIcon size={46} round />
          </PinterestShareButton>
        </div>

        <div className="px-1">
          <WhatsappShareButton
            url={"https://convertext.vercel.app"}
            title={"Convert Text to Html with CSS ou Tailwind."}
            separator=":: "
            blankTarget='true'
          >
            <WhatsappIcon size={46} round />
          </WhatsappShareButton>
        </div>

        <div className="px-1">
          <TwitterShareButton
            url={"https://convertext.vercel.app"}
            title={"Convert Text to Html with CSS ou Tailwind."}
            hashtag={'#converttexttohtml #texttohtml #converttext'}
            blankTarget='true'
          >
            <TwitterIcon size={46} round />
          </TwitterShareButton>
        </div>

        <div className="px-1">
          <TelegramShareButton
            url={"https://convertext.vercel.app"}
            title={"Convert Text to Html with CSS ou Tailwind."}
            blankTarget='true'
          >
            <TelegramIcon size={46} round />
          </TelegramShareButton>
        </div>

        <div className="px-1">
          <LinkedinShareButton
            url={'https://github.com/next-share'}
            blankTarget='true'
          >
            <LinkedinIcon size={46} round />
          </LinkedinShareButton>
        </div>

        <div className="px-1">
          <RedditShareButton
            url={"https://convertext.vercel.app"}
            title={"Convert Text to Html with CSS ou Tailwind."}
            blankTarget='true'
          >
            <RedditIcon size={46} round />
          </RedditShareButton>
        </div>

        <div className="px-1">
          <EmailShareButton
            url={"https://convertext.vercel.app"}
            subject={"Convert Text to Html with CSS ou Tailwind."}
            body="body"
            blankTarget='true'
          >
            <EmailIcon size={46} round />
          </EmailShareButton>

        </div>
      </div>

    </div>
  );
}
export default SocialShare;