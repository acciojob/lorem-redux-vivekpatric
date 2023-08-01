import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchLorem } from "./store";

const Lorem = ({ content, isLoading, error, fetchLorem }) => {
  useEffect(() => {
    fetchLorem();
  }, [fetchLorem]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <div>{content}</div>;
};

const mapStateToProps = (state) => {
  return {
    content: state.lorem.content,
    isLoading: state.lorem.isLoading,
    error: state.lorem.error,
  };
};

const mapDispatchToProps = {
  fetchLorem,
};

export default connect(mapStateToProps, mapDispatchToProps)(Lorem);