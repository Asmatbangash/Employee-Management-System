import employeeImg from '../../assets/images/ems.png'
import Apply from '../../assets/images/Apply.gif'
import approved from '../../assets/images/approved.gif'
import panding from '../../assets/images/load-time.gif'
import rejected from '../../assets/images/rejected.gif'



function Leave(){
    return(
        <div className='container'>
           <h1 className='my-4 ms-3 fs-2'>Leave Details</h1>
        <div class="container d-flex flex-wrap mb-2">
    <div class="col-md-5 my-2 mx-2">
      <div class="row g-0 border rounded overflow-hidden shadow-sm position-relative">
      <div class="col d-lg-block">
         <img src={Apply} alt="" className='w-50 h-100'/>
        </div>
        <div class="col p-4 d-flex flex-column position-static">
          <h3 class="mb-0">Leave Applied</h3>
          <div class="mb-1 text-body-secondary"><b>4</b></div>
        </div>
      </div>
    </div>
    <div class="col-md-5 my-2 mx-2">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm  position-relative">
      <div class="col d-lg-block">
         <img src={approved} alt="" className='w-50 h-100' />
        </div>
        <div class="col p-4 d-flex flex-column position-static">
          <h3 class="mb-0">Leaved Approved</h3>
          <div class="mb-1 text-body-secondary"><b>4</b></div>
        </div>
      </div>
    </div>
    <div class="col-md-5 my-2 mx-2">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm  position-relative">
      <div class="col d-lg-block">
         <img src={panding} alt="" className='w-50 h-100'/>
        </div>
        <div class="col p-4 d-flex flex-column position-static">
          <h3 class="mb-0">Leave Panding</h3>
          <div class="mb-1 text-body-secondary"><b>4</b></div>
        </div>
      </div>
    </div>
    <div class="col-md-5 my-2 mx-2">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm  position-relative">
      <div class="col d-lg-block">
         <img src={rejected} alt="" className='w-50 h-100'/>
        </div>
        <div class="col p-4 d-flex flex-column position-static">
          <h3 class="mb-0">Leave Rejected</h3>
          <div class="mb-1 text-body-secondary"><b>4</b></div>
        </div>
      </div>
    </div>
  </div>
  </div>
    )
}

export default Leave;