import { keyFor } from 'react-social-icons'

const avaialeSocialLinks = [
	'bandsintown',
	'behance',
	'clubhouse',
	'codepen',
	'discord',
	'dribbble',
	'dropbox',
	'email',
	'facebook',
	'fivehundredpix',
	'flickr',
	'foursquare',
	'github',
	'gitlab',
	'google',
	'google_play',
	'groupme',
	'instagram',
	'itch.io',
	'itunes',
	'linkedin',
	'linktree',
	'mailto',
	'medium',
	'meetup',
	'pinterest',
	'pixiv',
	'ravelry',
	'rdio',
	'reddit',
	'rss',
	'sharethis',
	'slack',
	'smugmug',
	'snapchat',
	'soundcloud',
	'spotify',
	'squarespace',
	'stackoverflow',
	't.me',
	'telegram',
	'tiktok',
	'tumblr',
	'twitch',
	'twitter',
	'upwork',
	'vevo',
	'vimeo',
	'vine',
	'vk',
	'vsco',
	'wechat',
	'whatsapp',
	'yelp',
	'youtube',
]

export const checkSocialLink = (url: string) => {
	const clearUrl = keyFor(url)
	return avaialeSocialLinks.some(link => link === clearUrl)
}
