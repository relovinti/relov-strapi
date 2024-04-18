"use strict";(self.webpackChunk_strapi_admin=self.webpackChunk_strapi_admin||[]).push([[5199],{83119:function(D,l){const e=()=>null;l.Z=e},83196:function(D,l,e){var t=e(32735),s=e(60216),r=e.n(s),a=e(5636),i=e(39161),u=e.n(i),o=e(57269),g=e.n(o),n=e(13478),E=e.n(n);const y=({displayedFilters:p})=>{const[h,T]=(0,t.useState)(!1),{formatMessage:_}=(0,a.useIntl)(),L=(0,t.useRef)(),O=()=>{T(K=>!K)};return t.createElement(t.Fragment,null,t.createElement(i.Box,{paddingTop:1,paddingBottom:1},t.createElement(i.Button,{variant:"tertiary",ref:L,startIcon:t.createElement(o.Filter,null),onClick:O,size:"S"},_({id:"app.utils.filters",defaultMessage:"Filters"})),h&&t.createElement(n.FilterPopoverURLQuery,{displayedFilters:p,isVisible:h,onToggle:O,source:L})),t.createElement(n.FilterListURLQuery,{filtersSchema:p}))};y.propTypes={displayedFilters:r().arrayOf(r().shape({name:r().string.isRequired,metadatas:r().shape({label:r().string}),fieldSchema:r().shape({type:r().string})})).isRequired},l.Z=y},9814:function(D,l,e){var t=e(32735),s=e(5636),r=e(60216),a=e.n(r),i=e(39161),u=e.n(i),o=e(57269),g=e.n(o);const n=({onClick:E})=>{const{formatMessage:y}=(0,s.useIntl)();return t.createElement(i.Button,{onClick:E,startIcon:t.createElement(o.Envelop,null),size:"S"},y({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}))};n.propTypes={onClick:a().func.isRequired},l.Z=n},62658:function(D,l){const e={firstname:"",lastname:"",email:"",roles:[]};l.Z=e},61358:function(D,l){const e=[];l.Z=e},54865:function(D,l,e){e.r(l),e.d(l,{default:function(){return ge}});var t=e(32735),s=e(13478),r=e(72041),a=e(39161),i=e(5141),u=e(5636),o=e(84968),g=e(60216),n=e.n(g),E=e(57269),y=e(64421);const p=({canDelete:d,headers:M,entriesToDelete:f,onClickDelete:R,onSelectRow:$,withMainAction:A,withBulkActions:U,rows:Q})=>{const{push:I,location:{pathname:Z}}=(0,i.useHistory)(),{formatMessage:P}=(0,u.useIntl)();return t.createElement(a.Tbody,null,Q.map(c=>{const z=f.findIndex(C=>C===c.id)!==-1;return t.createElement(a.Tr,{key:c.id,...(0,s.onRowClick)({fn:()=>I(`${Z}/${c.id}`),condition:U})},A&&t.createElement(a.Td,{...s.stopPropagation},t.createElement(a.BaseCheckbox,{"aria-label":P({id:"app.component.table.select.one-entry",defaultMessage:"Select {target}"},{target:(0,y.Pp)(c.firstname,c.lastname)}),checked:z,onChange:()=>{$({name:c.id,value:!z})}})),M.map(({key:C,cellFormatter:G,name:S,...F})=>t.createElement(a.Td,{key:C},typeof G=="function"?G(c,{key:C,name:S,formatMessage:P,...F}):t.createElement(a.Typography,{textColor:"neutral800"},c[S]||"-"))),U&&t.createElement(a.Td,null,t.createElement(a.Flex,{justifyContent:"end"},t.createElement(a.IconButton,{onClick:()=>I(`${Z}/${c.id}`),label:P({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:(0,y.Pp)(c.firstname,c.lastname)}),noBorder:!0,icon:t.createElement(E.Pencil,null)}),d&&t.createElement(a.Box,{paddingLeft:1,...s.stopPropagation},t.createElement(a.IconButton,{onClick:()=>R(c.id),label:P({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:(0,y.Pp)(c.firstname,c.lastname)}),noBorder:!0,icon:t.createElement(E.Trash,null)})))))}))};p.defaultProps={canDelete:!1,entriesToDelete:[],onClickDelete(){},onSelectRow(){},rows:[],withBulkActions:!1,withMainAction:!1},p.propTypes={canDelete:n().bool,entriesToDelete:n().array,headers:n().array.isRequired,onClickDelete:n().func,onSelectRow:n().func,rows:n().array,withBulkActions:n().bool,withMainAction:n().bool};var h=p,T=e(83196),_=e(41925),L=e(83281),O=e(4397),x=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0}]],v=e(5173),q=v.Ry().shape({firstname:v.Z_().trim().required(s.translatedErrors.required),lastname:v.Z_(),email:v.Z_().email(s.translatedErrors.email).required(s.translatedErrors.required),roles:v.IX().min(1,s.translatedErrors.required).required(s.translatedErrors.required)}),ee={create:{buttonSubmitLabel:{id:"app.containers.Users.ModalForm.footer.button-success",defaultMessage:"Invite user"},isDisabled:!1,next:"magic-link"},"magic-link":{buttonSubmitLabel:{id:"global.finish",defaultMessage:"Finish"},isDisabled:!0,next:null}};const N=(()=>window&&window.strapi&&window.strapi.isEE?e(64746).Z:e(62658).Z)(),te=(()=>window&&window.strapi&&window.strapi.isEE?e(43116).Z:e(61358).Z)(),ae=(()=>window&&window.strapi&&window.strapi.isEE?e(28890).Z:e(16325).Z)(),Y=d=>{let{queryName:M,onToggle:f}=d;const[R,$]=(0,t.useState)("create"),[A,U]=(0,t.useState)(!1),[Q,I]=(0,t.useState)(null),Z=(0,o.useQueryClient)(),{formatMessage:P}=(0,u.useIntl)(),c=(0,s.useNotification)(),{lockApp:z,unlockApp:C}=(0,s.useOverlayBlocker)(),{post:G}=(0,s.useFetchClient)(),S=(0,o.useMutation)(W=>G("/admin/users",W),{async onSuccess(W){let{data:j}=W;I(j.data.registrationToken),await Z.refetchQueries(M),await Z.refetchQueries(["ee","license-limit-info"]),k(),U(!1)},onError(W){throw U(!1),c({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),W},onSettled(){C()}}),F=P({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}),ne=async(W,j)=>{let{setErrors:J}=j;z(),U(!0);try{await S.mutateAsync(W)}catch(V){C(),V?.response?.data?.error.message==="Email already taken"&&J({email:V.response.data.error.message})}},k=()=>{m?$(m):f()},{buttonSubmitLabel:X,isDisabled:H,next:m}=ee[R],_e=R==="create"?t.createElement(a.Button,{type:"submit",loading:A},P(X)):t.createElement(a.Button,{type:"button",loading:A,onClick:f},P(X));return t.createElement(a.ModalLayout,{onClose:f,labelledBy:"title"},t.createElement(a.ModalHeader,null,t.createElement(a.Breadcrumbs,{label:F},t.createElement(a.Crumb,null,F))),t.createElement(L.Formik,{initialValues:N,onSubmit:ne,validationSchema:q,validateOnChange:!1},W=>{let{errors:j,handleChange:J,values:V}=W;return t.createElement(s.Form,null,t.createElement(a.ModalBody,null,t.createElement(a.Stack,{spacing:6},R!=="create"&&t.createElement(ae,{registrationToken:Q}),t.createElement(a.Box,null,t.createElement(a.Typography,{variant:"beta",as:"h2"},P({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"User details"})),t.createElement(a.Box,{paddingTop:4},t.createElement(a.Stack,{spacing:1},t.createElement(a.Grid,{gap:5},x.map(re=>re.map(B=>t.createElement(a.GridItem,(0,_.Z)({key:B.name},B.size),t.createElement(s.GenericInput,(0,_.Z)({},B,{disabled:H,error:j[B.name],onChange:J,value:V[B.name]}))))))))),t.createElement(a.Box,null,t.createElement(a.Typography,{variant:"beta",as:"h2"},P({id:"global.roles",defaultMessage:"User's role"})),t.createElement(a.Box,{paddingTop:4},t.createElement(a.Grid,{gap:5},t.createElement(a.GridItem,{col:6,xs:12},t.createElement(O.Z,{disabled:H,error:j.roles,onChange:J,value:V.roles})),te.map(re=>re.map(B=>t.createElement(a.GridItem,(0,_.Z)({key:B.name},B.size),t.createElement(s.GenericInput,(0,_.Z)({},B,{disabled:H,onChange:J,value:V[B.name]})))))))))),t.createElement(a.ModalFooter,{startActions:t.createElement(a.Button,{variant:"tertiary",onClick:f,type:"button"},P({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:_e}))}))};Y.propTypes={onToggle:n().func.isRequired,queryName:n().array.isRequired};var se=Y;const w=({pagination:d})=>t.createElement(a.Box,{paddingTop:4},t.createElement(a.Flex,{alignItems:"flex-end",justifyContent:"space-between"},t.createElement(s.PageSizeURLQuery,null),t.createElement(s.PaginationURLQuery,{pagination:d})));w.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},w.propTypes={pagination:n().shape({page:n().number,pageCount:n().number,pageSize:n().number,total:n().number})};var b=w;const ie=async(d,M)=>{const{get:f}=(0,s.getFetchClient)(),{data:{data:R}}=await f(`/admin/users${d}`);return M(),R},ce=async d=>{const{post:M}=(0,s.getFetchClient)();await M("/admin/users/batch-delete",{ids:d})};var de=[{name:"firstname",metadatas:{label:"Firstname"},fieldSchema:{type:"string"}},{name:"lastname",metadatas:{label:"Lastname"},fieldSchema:{type:"string"}},{name:"email",metadatas:{label:"Email"},fieldSchema:{type:"email"}},{name:"username",metadatas:{label:"Username"},fieldSchema:{type:"string"}},{name:"isActive",metadatas:{label:"Active user"},fieldSchema:{type:"boolean"}}],ue=[{name:"firstname",key:"firstname",metadatas:{label:{id:"Settings.permissions.users.firstname",defaultMessage:"Firstname"},sortable:!0}},{name:"lastname",key:"lastname",metadatas:{label:{id:"Settings.permissions.users.lastname",defaultMessage:"Lastname"},sortable:!0}},{key:"email",name:"email",metadatas:{label:{id:"Settings.permissions.users.email",defaultMessage:"Email"},sortable:!0}},{key:"roles",name:"roles",metadatas:{label:{id:"Settings.permissions.users.roles",defaultMessage:"Roles"},sortable:!1},cellFormatter({roles:d},{formatMessage:M}){return t.createElement(a.Typography,{textColor:"neutral800"},d.map(f=>M({id:`Settings.permissions.users.${f.code}`,defaultMessage:f.name})).join(`,
`))}},{key:"username",name:"username",metadatas:{label:{id:"Settings.permissions.users.username",defaultMessage:"Username"},sortable:!0}},{key:"isActive",name:"isActive",metadatas:{label:{id:"Settings.permissions.users.user-status",defaultMessage:"User status"},sortable:!1},cellFormatter({isActive:d},{formatMessage:M}){return t.createElement(a.Flex,null,t.createElement(s.Status,{isActive:d,variant:d?"success":"danger"}),t.createElement(a.Typography,{textColor:"neutral800"},M({id:d?"Settings.permissions.users.active":"Settings.permissions.users.inactive",defaultMessage:d?"Active":"Inactive"})))}}];const me=(()=>window&&window.strapi&&window.strapi.isEE?e(99724).Z:e(9814).Z)(),Ee=(()=>window&&window.strapi&&window.strapi.isEE?e(21306).Z:e(83119).Z)();var pe=()=>{const{formatAPIError:d}=(0,s.useAPIErrorHandler)(),[M,f]=(0,t.useState)(!1),{allowedActions:{canCreate:R,canDelete:$,canRead:A}}=(0,s.useRBAC)(r.Z.settings.users),U=(0,o.useQueryClient)(),Q=(0,s.useNotification)(),{formatMessage:I}=(0,u.useIntl)(),{search:Z}=(0,i.useLocation)();(0,s.useFocusWhenNavigate)(),Ee();const{notifyStatus:P}=(0,a.useNotifyAT)(),c=["users",Z],z=ue.map(m=>({...m,metadatas:{...m.metadatas,label:I(m.metadatas.label)}})),C=I({id:"global.users",defaultMessage:"Users"}),G=()=>{P(I({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:C}))},{status:S,data:F,isFetching:ne}=(0,o.useQuery)(c,()=>ie(Z,G),{enabled:A,retry:!1,onError(m){Q({type:"warning",message:{id:"notification.error",message:d(m),defaultMessage:"An error occured"}})}}),k=()=>{f(m=>!m)},X=(0,o.useMutation)(m=>ce(m),{async onSuccess(){await U.refetchQueries(c),await U.refetchQueries(["ee","license-limit-info"])},onError(m){Q({type:"warning",message:{id:"notification.error",message:d(m),defaultMessage:"An error occured"}})}}),H=S!=="success"&&S!=="error"||S==="success"&&ne;return t.createElement(a.Main,{"aria-busy":H},t.createElement(s.SettingsPageTitle,{name:"Users"}),t.createElement(a.HeaderLayout,{primaryAction:R&&t.createElement(me,{onClick:k}),title:C,subtitle:I({id:"Settings.permissions.users.listview.header.subtitle",defaultMessage:"All the users who have access to the Strapi admin panel"})}),A&&t.createElement(a.ActionLayout,{startActions:t.createElement(t.Fragment,null,t.createElement(s.SearchURLQuery,{label:I({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:C})}),t.createElement(T.Z,{displayedFilters:de}))}),t.createElement(a.ContentLayout,{canRead:A},!A&&t.createElement(s.NoPermissions,null),S==="error"&&t.createElement("div",null,"TODO: An error occurred"),A&&t.createElement(t.Fragment,null,t.createElement(s.DynamicTable,{contentType:"Users",isLoading:H,onConfirmDeleteAll:X.mutateAsync,onConfirmDelete:m=>X.mutateAsync([m]),headers:z,rows:F?.results,withBulkActions:!0,withMainAction:$},t.createElement(h,{canDelete:$,headers:z,rows:F?.results||[],withBulkActions:!0,withMainAction:$})),t.createElement(b,{pagination:F?.pagination}))),M&&t.createElement(se,{onToggle:k,queryName:c}))},ge=()=>t.createElement(s.CheckPagePermissions,{permissions:r.Z.settings.users.main},t.createElement(pe,null))},76779:function(D,l,e){var t=e(32735),s=e(60216),r=e.n(s),a=e(39161),i=e.n(a),u=e(13478),o=e.n(u),g=e(57269),n=e.n(g),E=e(59087),y=e.n(E),p=e(5636);const h=({children:T,target:_})=>{const L=(0,u.useNotification)(),{formatMessage:O}=(0,p.useIntl)(),K=()=>{L({type:"info",message:{id:"notification.link-copied"}})},x=O({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"});return t.createElement(u.ContentBox,{endAction:t.createElement(E.CopyToClipboard,{onCopy:K,text:_},t.createElement(a.IconButton,{label:x,noBorder:!0,icon:t.createElement(g.Duplicate,null)})),title:_,titleEllipsis:!0,subtitle:T,icon:t.createElement("span",{style:{fontSize:32}},"\u2709\uFE0F"),iconBackground:"neutral100"})};h.propTypes={children:r().oneOfType([r().element,r().string]).isRequired,target:r().string.isRequired},l.Z=h},16325:function(D,l,e){var t=e(32735),s=e(5636),r=e(60216),a=e.n(r),i=e(463),u=e(76779);const o=({registrationToken:g})=>{const{formatMessage:n}=(0,s.useIntl)(),E=`${window.location.origin}${i.Z}auth/register?registrationToken=${g}`;return t.createElement(u.Z,{target:E},n({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"}))};o.defaultProps={registrationToken:""},o.propTypes={registrationToken:a().string},l.Z=o},4397:function(D,l,e){var t=e(32735),s=e(60216),r=e.n(s),a=e(5636),i=e(39161),u=e.n(i),o=e(84968),g=e.n(o),n=e(83292),E=e(57269),y=e.n(E),p=e(13478),h=e.n(p);const T=n.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,_=n.default.div`
  animation: ${T} 2s infinite linear;
`,L=()=>t.createElement(_,null,t.createElement(E.Loader,null)),O=async()=>{const{get:x}=(0,p.getFetchClient)(),{data:v}=await x("/admin/roles");return v.data},K=({disabled:x,error:v,onChange:oe,value:q})=>{const{status:le,data:ee}=(0,o.useQuery)(["roles"],O,{staleTime:5e4}),{formatMessage:N}=(0,a.useIntl)(),te=v?N({id:v,defaultMessage:v}):"",ae=N({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),Y=N({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),se=N({id:"app.components.Select.placeholder",defaultMessage:"Select"}),w=le==="loading"?t.createElement(L,null):void 0;return t.createElement(i.Select,{id:"roles",disabled:x,error:te,hint:Y,label:ae,name:"roles",onChange:b=>{oe({target:{name:"roles",value:b}})},placeholder:se,multi:!0,startIcon:w,value:q,withTags:!0,required:!0},(ee||[]).map(b=>t.createElement(i.Option,{key:b.id,value:b.id},N({id:`global.${b.code}`,defaultMessage:b.name}))))};K.defaultProps={disabled:!1,error:void 0},K.propTypes={disabled:r().bool,error:r().string,onChange:r().func.isRequired,value:r().array.isRequired},l.Z=K},99724:function(D,l,e){var t=e(32735),s=e(5636),r=e(60216),a=e.n(r),i=e(39161),u=e.n(i),o=e(57269),g=e.n(o),n=e(36866),E=e.n(n),y=e(58414);const p=({onClick:h})=>{const{formatMessage:T}=(0,s.useIntl)(),{license:_}=(0,y.q5)(),{permittedSeats:L,shouldStopCreate:O}=_?.data??{};return t.createElement(i.Stack,{spacing:2,horizontal:!0},!E()(L)&&O&&t.createElement(i.Tooltip,{description:T({id:"Settings.application.admin-seats.at-limit-tooltip",defaultMessage:"At limit: add seats to invite more users"}),position:"left"},t.createElement(i.Icon,{width:`${14/16}rem`,height:`${14/16}rem`,color:"danger500",as:o.ExclamationMarkCircle})),t.createElement(i.Button,{"data-testid":"create-user-button",onClick:h,startIcon:t.createElement(o.Envelop,null),size:"S",disabled:O},T({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"})))};p.propTypes={onClick:a().func.isRequired},l.Z=p},64746:function(D,l,e){var t=e(62658);const s=strapi.features.isEnabled(strapi.features.SSO)?{useSSORegistration:!0}:{},r={...t.Z,...s};l.Z=r},43116:function(D,l){const e=strapi.features.isEnabled(strapi.features.SSO)?[[{intlLabel:{id:"Settings.permissions.users.form.sso",defaultMessage:"Connect with SSO"},hint:{id:"Settings.permissions.users.form.sso.description",defaultMessage:"When enabled (ON), users can login via SSO"},name:"useSSORegistration",type:"bool",size:{col:6,xs:12}}]]:[];l.Z=e},28890:function(D,l,e){var t=e(32735),s=e(5636),r=e(60216),a=e.n(r),i=e(463),u=e(76779);const o=({registrationToken:g})=>{const{formatMessage:n}=(0,s.useIntl)();return g?t.createElement(u.Z,{target:`${window.location.origin}${i.Z}auth/register?registrationToken=${g}`},n({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})):t.createElement(u.Z,{target:`${window.location.origin}${i.Z}auth/login`},n({id:"app.components.Users.MagicLink.connect.sso",defaultMessage:"Send this link to the user, the first login can be made via a SSO provider."}))};o.defaultProps={registrationToken:""},o.propTypes={registrationToken:a().string},l.Z=o}}]);