import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from '../models/livro/livro.module';

@Injectable({ providedIn: 'root' })
export class LivroService {
  private apiUrl = 'http://localhost:8081/api/livros';

  constructor(private http: HttpClient) {}

  listarTodos(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.apiUrl);
  }

  buscarPorId(id: number): Observable<Livro> {
    return this.http.get<Livro>(`${this.apiUrl}/${id}`);
  }

  cadastrar(livro: Livro): Observable<Livro> {
    return this.http.post<Livro>(this.apiUrl, livro);
  }

  atualizar(id: number, livro: Livro): Observable<Livro> {
    return this.http.put<Livro>(`${this.apiUrl}/${id}`, livro);
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
