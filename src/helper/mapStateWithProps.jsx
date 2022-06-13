const mapStateWithProps = (state) => {
   return {
      userInfo: state.auth.userInfo.info,
      cartInfo: state.auth.cartInfo.info,
   };
};

export default mapStateWithProps;
