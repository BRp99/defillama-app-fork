import { DEFI_SETTINGS, FEES_SETTINGS } from '~/contexts/LocalStorage'

export const tvlOptions = [
	{
		name: 'Staking',
		key: DEFI_SETTINGS.STAKING,
		help: 'Include governance tokens staked in the protocol'
	},
	{
		name: 'Pool2',
		key: DEFI_SETTINGS.POOL2,
		help: 'Include staked lp tokens where one of the coins in the pair is the governance token'
	},
	{
		name: 'Gov Tokens',
		key: DEFI_SETTINGS.GOV_TOKENS,
		help: 'Include governance tokens'
	},
	{
		name: 'Borrows',
		key: DEFI_SETTINGS.BORROWED,
		help: 'Include borrowed coins in lending protocols'
	},
	{
		name: 'Double Count',
		key: DEFI_SETTINGS.DOUBLE_COUNT,
		help: 'Include TVL of protocols which TVL feeds into another protocol'
	},
	{
		name: 'Liquid Staking',
		key: DEFI_SETTINGS.LIQUID_STAKING,
		help: 'Include Rewards/Liquidity for staked assets'
	},
	{
		name: 'Vesting',
		key: DEFI_SETTINGS.VESTING,
		help: 'Include tokens that are not circulating or not issued yet'
	}
]

export const feesOptions = [
	{ name: 'Bribes', key: FEES_SETTINGS.BRIBES, help: null },
	{ name: 'Token Tax', key: FEES_SETTINGS.TOKENTAX, help: null }
]

export const extraTvlOptionsHelperTexts = Object.fromEntries(tvlOptions.map((p) => [p.key, p.help]))
