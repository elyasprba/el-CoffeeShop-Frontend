const mapStateWithProps = (state) => {
   return {
      userInfo: state.auth.userInfo.info,
   };
};

export default mapStateWithProps;
