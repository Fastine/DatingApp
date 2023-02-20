import { HttpClient, HttpParams } from "@angular/common/http";
import { map } from "rxjs";
import { PaginatedResults } from "../_models/pagination";

export function getPaginatedResult<T>(url: string, params: HttpParams, http: HttpClient) {
	const paginatedResult: PaginatedResults<T> = new PaginatedResults<T>();
	return http.get<T>(url, { observe: "response", params }).pipe(
		map(response => {
			if (response.body) {
				paginatedResult.result = response.body;
			}
			const pagination = response.headers.get("Pagination");
			if (pagination) {
				paginatedResult.pagination = JSON.parse(pagination);
			}
			return paginatedResult;
		})
	);
}

export function getPaginationHeaders(pageNumber: number, pageSize: number) {
	let params = new HttpParams(); //	HttpParams provided by Angular that allows us to set query string parameters along with an HTTP request

	params = params.append("pageNumber", pageNumber); //	Setting params so query string can be added
	params = params.append("pageSize", pageSize);

	return params;
}
