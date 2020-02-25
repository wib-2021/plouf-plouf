import ListValues from './ListValues'
import { connect } from 'react-redux'
import * as valuesActions from '../../actions/valuesActions'
import { RootState } from '../../reducers'

const mapStateToProps = (state: RootState) => ({
  values: state.values,
})

const dispatchProps = {
  onRemove: valuesActions.remove,
}

export default connect(mapStateToProps, dispatchProps)(ListValues)
