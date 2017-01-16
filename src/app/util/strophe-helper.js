import { $build, $iq, $msg, $pres, Strophe } from 'strophe-core?fix-amd';

// TODO: Shim these plugins using either imports-loader or ProvidePlugin so that they modify the right instance of Strophe
import 'strophejs-plugins/roster/strophe.roster';
import 'strophejs-plugins/disco/strophe.disco';

export { $build, $iq, $msg, $pres, Strophe };
