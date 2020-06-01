---
title: [Android][ExoPlayer][2020.02.21]ExoPlayer 개발자 문서 번역 02 - ExoPlayer Supported formats
date: 2020-02-21 13:02:78
category: ExoPlayer
draft: false
---


# Supported formats

ExoPlayer가 지원하는 Format을 정의 할 때는 "Media format"이 여러 수준으로 정의되어 있어야합니다.
가장 낮은 레벨에서 가장 높은 레벨까지는 다음과 같습니다.

개별 미디어 샘플의 형식 (예 : 비디오 프레임 또는 오디오 프레임), 일반적인 비디오 파일에는 최소한 두 가지 media format이 포함됩니다.
- 비디오 (예 : H.264)와 하나는 오디오 (예 : AAC)입니다.

미디어 파일은 컨테이너 형식 (예 : MP4)을 가지며 일반적으로 파일 확장자로 표시됩니다. 
- 일부 오디오 전용 형식 (예 : MP3)의 경우 샘플 및 컨테이너 형식이 동일 할 수 있습니다.

DASH, SmoothStreaming 및 HLS와 같은 Adaptive streaming technologies 형 스트리밍 기술들은 Media format이 아니지만 ExoPlayer를 이용해 동영상을 재생하는 경우 지원 범위를 정의해야합니다.


# Adaptive streaming

DASH

Exoplayer는 DASH의 여러 컨테이너 format을 지원합니다. Media streams은 반드시 Demuxing되어야하고,
비디오, 오디오 및 텍스트는 DASH 매니페스트의 고유 한 AdaptationSet 요소에 정의되어야합니다 (CEA-608은 예외).  또한 오디오 및 비디오에 포함된 sample format도 지원해야합니다 (자세한 내용은 sample format 표 참조)


Feature	Supported	Comment
Containers	 	 
FMP4	YES	Demuxed streams only
WebM	YES	Demuxed streams only
Matroska	YES	Demuxed streams only
MPEG-TS	NO	No support planned
Closed captions/subtitles	 	 
TTML	YES	Raw, or embedded in FMP4 according to ISO/IEC 14496-30
WebVTT	YES	Raw, or embedded in FMP4 according to ISO/IEC 14496-30
CEA-608	YES	Carried in SEI messages embedded in FMP4 video streams
Metadata	 	 
EMSG metadata	YES	Embedded in FMP4
Content protection	 	 
Widevine	YES	API 19+ (“cenc” scheme) and 25+ (“cbcs”, “cbc1” and “cens” schemes)
PlayReady SL2000	YES	Android TV only
ClearKey	YES	API 21+

SmoothStreaming

Exoplayer는 SmoothStreaming의 FMP4 컨테이너 format을 지원합니다. Media streams은 반드시 Demuxing되어야하고,비디오, 오디오 및 텍스트는 SmoothStreaming의 매니페스트의 고유 한  StreamIndex 요소에 정의되어야합니다 또한 오디오 및 비디오에 포함된 sample format도 지원해야합니다 (자세한 내용은 sample format 표 참조)

Feature	Supported	Comment
Containers	 	 
FMP4	YES	Demuxed streams only
Closed captions/subtitles	 	 
TTML	YES	Embedded in FMP4
Content protection	 	 
PlayReady SL2000	YES	Android TV only
HLS
ExoPlayer supports HLS with multiple container formats. The contained audio and video sample formats must also be supported (see the sample formats section for details). We strongly encourage HLS content producers to generate high quality HLS streams, as described here.

Feature	Supported	Comment
Containers	 	 
MPEG-TS	YES	 
FMP4/CMAF	YES	 
ADTS (AAC)	YES	 
MP3	YES	 
Closed captions/subtitles	 	 
CEA-608	YES	 
WebVTT	YES	 
Metadata	 	 
ID3 metadata	YES	 
Content protection	 	 
AES-128	YES	 
Sample AES-128	NO	 
Widevine	YES	API 19+ (“cenc” scheme) and 25+ (“cbcs” scheme)
PlayReady SL2000	YES	Android TV only
Progressive container formats
Streams in the following container formats can be played directly by ExoPlayer. The contained audio and video sample formats must also be supported (see the sample formats section for details).

Container format	Supported	Comment
MP4	YES	 
M4A	YES	 
FMP4	YES	 
WebM	YES	 
Matroska	YES	 
MP3	YES	Some streams only seekable using constant bitrate seeking**
Ogg	YES	Containing Vorbis, Opus and FLAC
WAV	YES	 
MPEG-TS	YES	 
MPEG-PS	YES	 
FLV	YES	Not seekable*
ADTS (AAC)	YES	Only seekable using constant bitrate seeking**
FLAC	YES	Using the FLAC extension or the FLAC extractor in the core library***
AMR	YES	Only seekable using constant bitrate seeking**
* Seeking is unsupported because the container does not provide metadata (e.g., a sample index) to allow a media player to perform a seek in an efficient way. If seeking is required, we suggest using a more appropriate container format.

** These extractors have FLAG_ENABLE_CONSTANT_BITRATE_SEEKING flags for enabling approximate seeking using a constant bitrate assumption. This functionality is not enabled by default. The simplest way to enable this functionality for all extractors that support it is to use DefaultExtractorsFactory.setConstantBitrateSeekingEnabled, as described here.

*** The FLAC extension extractor outputs raw audio, which can be handled by the framework on all API levels. The core library FLAC extractor outputs FLAC audio frames and so relies on having a FLAC decoder (e.g., a MediaCodec decoder that handles FLAC (required from API level 27), or the FFmpeg extension with FLAC enabled). The DefaultExtractorsFactory uses the extension extractor if the application was built with the FLAC extension. Otherwise, it uses the core library extractor.

Sample formats
By default ExoPlayer uses Android’s platform decoders. Hence the supported sample formats depend on the underlying platform rather than on ExoPlayer. Sample formats supported by Android devices are documented here. Note that individual devices may support additional formats beyond those listed.

In addition to Android’s platform decoders, ExoPlayer can also make use of software decoder extensions. These must be manually built and included in projects that wish to make use of them. We currently provide software decoder extensions for AV1, VP9, FLAC, Opus and FFmpeg.

FFmpeg extension
The FFmpeg extension supports decoding a variety of different audio sample formats. You can choose which decoders to include by passing command line arguments to FFmpeg’s configure script:

Sample format	Argument(s) to configure
Vorbis	–enable-decoder=vorbis
Opus	–enable-decoder=opus
FLAC	–enable-decoder=flac
ALAC	–enable-decoder=alac
PCM μ-law	–enable-decoder=pcm_mulaw
PCM A-law	–enable-decoder=pcm_alaw
MP1, MP2, MP3	–enable-decoder=mp3
AMR-NB	–enable-decoder=amrnb
AMR-WB	–enable-decoder=amrwb
AAC	–enable-decoder=aac
AC-3	–enable-decoder=ac3
E-AC-3	–enable-decoder=eac3
DTS, DTS-HD	–enable-decoder=dca
TrueHD	–enable-decoder=mlp –enable-decoder=truehd
See the extension’s README.md for an example command line to configure.

Standalone subtitle formats
ExoPlayer supports standalone subtitle files in a variety of formats. Subtitle files can be side-loaded as described on the Media source page.

Container format	Supported	MIME type
WebVTT	YES	MimeTypes.TEXT_VTT
TTML / SMPTE-TT	YES	MimeTypes.APPLICATION_TTML
SubRip	YES	MimeTypes.APPLICATION_SUBRIP
SubStationAlpha (SSA/ASS)	YES	MimeTypes.TEXT_SSA
HDR video playback
ExoPlayer handles extracting high dynamic range (HDR) video in various containers, including Dolby Vision in MP4 and HDR10+ in Matroska/WebM. Decoding and displaying HDR content depends on support from the Android platform and device. See HDR Video Playback to learn about checking for HDR decoding/display capabilities and limitations of HDR support across Android versions.

When playing an HDR stream that requires support for a particular codec profile, ExoPlayer’s default MediaCodec selector will pick a decoder that supports that profile (if available), even if another decoder for the same MIME type that doesn’t support that profile appears higher up the codec list. This can result in selecting a software decoder in cases where the stream exceeds the capabilities of a hardware decoder for the same MIME type.
