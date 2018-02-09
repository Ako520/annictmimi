// @flow

import React from 'react'
import List from 'material-ui/List'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

import EpisodeCell from '../src/components/EpisodeCell'
import RecordItem from '../src/components/RecordItem'
import RatingLabel from '../src/components/RatingLabel'

import '../src/config/init'
import styled from 'styled-components'
import { episode1, episode2, record1, record2 } from './dummyData'

const Screen = styled.div`
	width: 360px;
	border: solid gray 3px;
`

storiesOf('EpisodeCell', module).add('example 1', () => (
	<Screen>
		<List>
			<EpisodeCell episode={episode1} onClick={action('open episode')} />
			<EpisodeCell
				episode={{ ...episode1, newCount: 0 }}
				onClick={action('open episode')}
			/>
			<EpisodeCell episode={episode2} onClick={action('open episode')} />
		</List>
	</Screen>
))

storiesOf('RecordCell', module).add('example 1', () => (
	<Screen>
		<List>
			<RecordItem
				record={record1}
				onClick={action('open record')}
				onClickTimestamp={action('clicked timestamp')}
			/>
			<hr />
			<RecordItem
				record={{ ...record1, ratingState: null }}
				onClick={action('open record')}
				onClickTimestamp={action('clicked timestamp')}
			/>
			<hr />
			<RecordItem
				record={record2}
				onClick={action('open record')}
				onClickTimestamp={action('clicked timestamp')}
			/>
		</List>
	</Screen>
))

storiesOf('RatingLabel', module).add('exists', () => (
	<Screen>
		{['GREAT', 'GOOD', 'AVERAGE', 'BAD', null].map(rate => (
			<div key={rate}>
				<hr />
				<p>{rate || 'null'}</p>
				<RatingLabel ratingState={rate} />
				<hr />
			</div>
		))}
	</Screen>
))
