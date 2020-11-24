import React from "react"

import {
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share"

interface Props {
  url: string
  title: string
}

const Share: React.FC<Props> = ({ url, title }: Props) => {
  return (
    <div className="sharer-buttons-toolbar clearfix floating">
      <LinkedinShareButton url={url} title={title}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>

    </div>
  )
}

export default Share
