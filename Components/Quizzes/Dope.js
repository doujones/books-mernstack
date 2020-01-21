import React from 'react'
import { graphql } from 'react-apollo'
import gql from "graphql-tag"
import Quizzes from './Quizzes'

let Get_Quizzes_Query = gql`query{
  quizzesList{
    items{
      choice
      question
      image 
      selection
    }
  }
}`

export default graphql(Get_Quizzes_Query,{
  props: results =>{
  const { loading, data } = result;
  let items = [];
  if (data && data. quizzesList) items = data.quizzesList.items;
  return {
    loading, 
    quizzes: items
  }
  }
})(Quizzes)
