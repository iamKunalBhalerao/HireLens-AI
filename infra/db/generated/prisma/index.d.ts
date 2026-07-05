
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model TechnicalQuestion
 * 
 */
export type TechnicalQuestion = $Result.DefaultSelection<Prisma.$TechnicalQuestionPayload>
/**
 * Model BehavioralQuestion
 * 
 */
export type BehavioralQuestion = $Result.DefaultSelection<Prisma.$BehavioralQuestionPayload>
/**
 * Model SkillGap
 * 
 */
export type SkillGap = $Result.DefaultSelection<Prisma.$SkillGapPayload>
/**
 * Model PreparationPlan
 * 
 */
export type PreparationPlan = $Result.DefaultSelection<Prisma.$PreparationPlanPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Severity: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH'
};

export type Severity = (typeof Severity)[keyof typeof Severity]

}

export type Severity = $Enums.Severity

export const Severity: typeof $Enums.Severity

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.technicalQuestion`: Exposes CRUD operations for the **TechnicalQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TechnicalQuestions
    * const technicalQuestions = await prisma.technicalQuestion.findMany()
    * ```
    */
  get technicalQuestion(): Prisma.TechnicalQuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.behavioralQuestion`: Exposes CRUD operations for the **BehavioralQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BehavioralQuestions
    * const behavioralQuestions = await prisma.behavioralQuestion.findMany()
    * ```
    */
  get behavioralQuestion(): Prisma.BehavioralQuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skillGap`: Exposes CRUD operations for the **SkillGap** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SkillGaps
    * const skillGaps = await prisma.skillGap.findMany()
    * ```
    */
  get skillGap(): Prisma.SkillGapDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.preparationPlan`: Exposes CRUD operations for the **PreparationPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PreparationPlans
    * const preparationPlans = await prisma.preparationPlan.findMany()
    * ```
    */
  get preparationPlan(): Prisma.PreparationPlanDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Review: 'Review',
    TechnicalQuestion: 'TechnicalQuestion',
    BehavioralQuestion: 'BehavioralQuestion',
    SkillGap: 'SkillGap',
    PreparationPlan: 'PreparationPlan'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "review" | "technicalQuestion" | "behavioralQuestion" | "skillGap" | "preparationPlan"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      TechnicalQuestion: {
        payload: Prisma.$TechnicalQuestionPayload<ExtArgs>
        fields: Prisma.TechnicalQuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TechnicalQuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicalQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TechnicalQuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicalQuestionPayload>
          }
          findFirst: {
            args: Prisma.TechnicalQuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicalQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TechnicalQuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicalQuestionPayload>
          }
          findMany: {
            args: Prisma.TechnicalQuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicalQuestionPayload>[]
          }
          create: {
            args: Prisma.TechnicalQuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicalQuestionPayload>
          }
          createMany: {
            args: Prisma.TechnicalQuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TechnicalQuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicalQuestionPayload>[]
          }
          delete: {
            args: Prisma.TechnicalQuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicalQuestionPayload>
          }
          update: {
            args: Prisma.TechnicalQuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicalQuestionPayload>
          }
          deleteMany: {
            args: Prisma.TechnicalQuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TechnicalQuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TechnicalQuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicalQuestionPayload>[]
          }
          upsert: {
            args: Prisma.TechnicalQuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicalQuestionPayload>
          }
          aggregate: {
            args: Prisma.TechnicalQuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTechnicalQuestion>
          }
          groupBy: {
            args: Prisma.TechnicalQuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TechnicalQuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TechnicalQuestionCountArgs<ExtArgs>
            result: $Utils.Optional<TechnicalQuestionCountAggregateOutputType> | number
          }
        }
      }
      BehavioralQuestion: {
        payload: Prisma.$BehavioralQuestionPayload<ExtArgs>
        fields: Prisma.BehavioralQuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BehavioralQuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BehavioralQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BehavioralQuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BehavioralQuestionPayload>
          }
          findFirst: {
            args: Prisma.BehavioralQuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BehavioralQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BehavioralQuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BehavioralQuestionPayload>
          }
          findMany: {
            args: Prisma.BehavioralQuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BehavioralQuestionPayload>[]
          }
          create: {
            args: Prisma.BehavioralQuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BehavioralQuestionPayload>
          }
          createMany: {
            args: Prisma.BehavioralQuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BehavioralQuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BehavioralQuestionPayload>[]
          }
          delete: {
            args: Prisma.BehavioralQuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BehavioralQuestionPayload>
          }
          update: {
            args: Prisma.BehavioralQuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BehavioralQuestionPayload>
          }
          deleteMany: {
            args: Prisma.BehavioralQuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BehavioralQuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BehavioralQuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BehavioralQuestionPayload>[]
          }
          upsert: {
            args: Prisma.BehavioralQuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BehavioralQuestionPayload>
          }
          aggregate: {
            args: Prisma.BehavioralQuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBehavioralQuestion>
          }
          groupBy: {
            args: Prisma.BehavioralQuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<BehavioralQuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.BehavioralQuestionCountArgs<ExtArgs>
            result: $Utils.Optional<BehavioralQuestionCountAggregateOutputType> | number
          }
        }
      }
      SkillGap: {
        payload: Prisma.$SkillGapPayload<ExtArgs>
        fields: Prisma.SkillGapFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillGapFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillGapPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillGapFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillGapPayload>
          }
          findFirst: {
            args: Prisma.SkillGapFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillGapPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillGapFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillGapPayload>
          }
          findMany: {
            args: Prisma.SkillGapFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillGapPayload>[]
          }
          create: {
            args: Prisma.SkillGapCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillGapPayload>
          }
          createMany: {
            args: Prisma.SkillGapCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillGapCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillGapPayload>[]
          }
          delete: {
            args: Prisma.SkillGapDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillGapPayload>
          }
          update: {
            args: Prisma.SkillGapUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillGapPayload>
          }
          deleteMany: {
            args: Prisma.SkillGapDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillGapUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkillGapUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillGapPayload>[]
          }
          upsert: {
            args: Prisma.SkillGapUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillGapPayload>
          }
          aggregate: {
            args: Prisma.SkillGapAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkillGap>
          }
          groupBy: {
            args: Prisma.SkillGapGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillGapGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillGapCountArgs<ExtArgs>
            result: $Utils.Optional<SkillGapCountAggregateOutputType> | number
          }
        }
      }
      PreparationPlan: {
        payload: Prisma.$PreparationPlanPayload<ExtArgs>
        fields: Prisma.PreparationPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PreparationPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreparationPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PreparationPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreparationPlanPayload>
          }
          findFirst: {
            args: Prisma.PreparationPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreparationPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PreparationPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreparationPlanPayload>
          }
          findMany: {
            args: Prisma.PreparationPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreparationPlanPayload>[]
          }
          create: {
            args: Prisma.PreparationPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreparationPlanPayload>
          }
          createMany: {
            args: Prisma.PreparationPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PreparationPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreparationPlanPayload>[]
          }
          delete: {
            args: Prisma.PreparationPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreparationPlanPayload>
          }
          update: {
            args: Prisma.PreparationPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreparationPlanPayload>
          }
          deleteMany: {
            args: Prisma.PreparationPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PreparationPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PreparationPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreparationPlanPayload>[]
          }
          upsert: {
            args: Prisma.PreparationPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreparationPlanPayload>
          }
          aggregate: {
            args: Prisma.PreparationPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePreparationPlan>
          }
          groupBy: {
            args: Prisma.PreparationPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PreparationPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PreparationPlanCountArgs<ExtArgs>
            result: $Utils.Optional<PreparationPlanCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    review?: ReviewOmit
    technicalQuestion?: TechnicalQuestionOmit
    behavioralQuestion?: BehavioralQuestionOmit
    skillGap?: SkillGapOmit
    preparationPlan?: PreparationPlanOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    reviews: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type ReviewCountOutputType
   */

  export type ReviewCountOutputType = {
    technicalQuestions: number
    behavioralQuestions: number
    skillGaps: number
    preparationPlans: number
  }

  export type ReviewCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    technicalQuestions?: boolean | ReviewCountOutputTypeCountTechnicalQuestionsArgs
    behavioralQuestions?: boolean | ReviewCountOutputTypeCountBehavioralQuestionsArgs
    skillGaps?: boolean | ReviewCountOutputTypeCountSkillGapsArgs
    preparationPlans?: boolean | ReviewCountOutputTypeCountPreparationPlansArgs
  }

  // Custom InputTypes
  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewCountOutputType
     */
    select?: ReviewCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeCountTechnicalQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TechnicalQuestionWhereInput
  }

  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeCountBehavioralQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BehavioralQuestionWhereInput
  }

  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeCountSkillGapsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillGapWhereInput
  }

  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeCountPreparationPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PreparationPlanWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    userName: string | null
    email: string | null
    password: string | null
    refreshToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    userName: string | null
    email: string | null
    password: string | null
    refreshToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    userName: number
    email: number
    password: number
    refreshToken: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    userName?: true
    email?: true
    password?: true
    refreshToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    userName?: true
    email?: true
    password?: true
    refreshToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    userName?: true
    email?: true
    password?: true
    refreshToken?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    userName: string
    email: string
    password: string
    refreshToken: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    email?: boolean
    password?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    email?: boolean
    password?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    email?: boolean
    password?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    userName?: boolean
    email?: boolean
    password?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userName" | "email" | "password" | "refreshToken" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userName: string
      email: string
      password: string
      refreshToken: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly userName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly refreshToken: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    matchScore: number | null
  }

  export type ReviewSumAggregateOutputType = {
    matchScore: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    userId: string | null
    resume: string | null
    selfDescription: string | null
    jobDescription: string | null
    title: string | null
    matchScore: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    resume: string | null
    selfDescription: string | null
    jobDescription: string | null
    title: string | null
    matchScore: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    userId: number
    resume: number
    selfDescription: number
    jobDescription: number
    title: number
    matchScore: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    matchScore?: true
  }

  export type ReviewSumAggregateInputType = {
    matchScore?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    userId?: true
    resume?: true
    selfDescription?: true
    jobDescription?: true
    title?: true
    matchScore?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    userId?: true
    resume?: true
    selfDescription?: true
    jobDescription?: true
    title?: true
    matchScore?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    userId?: true
    resume?: true
    selfDescription?: true
    jobDescription?: true
    title?: true
    matchScore?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    userId: string
    resume: string
    selfDescription: string | null
    jobDescription: string
    title: string
    matchScore: number
    createdAt: Date
    updatedAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    resume?: boolean
    selfDescription?: boolean
    jobDescription?: boolean
    title?: boolean
    matchScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    technicalQuestions?: boolean | Review$technicalQuestionsArgs<ExtArgs>
    behavioralQuestions?: boolean | Review$behavioralQuestionsArgs<ExtArgs>
    skillGaps?: boolean | Review$skillGapsArgs<ExtArgs>
    preparationPlans?: boolean | Review$preparationPlansArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ReviewCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    resume?: boolean
    selfDescription?: boolean
    jobDescription?: boolean
    title?: boolean
    matchScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    resume?: boolean
    selfDescription?: boolean
    jobDescription?: boolean
    title?: boolean
    matchScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    userId?: boolean
    resume?: boolean
    selfDescription?: boolean
    jobDescription?: boolean
    title?: boolean
    matchScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "resume" | "selfDescription" | "jobDescription" | "title" | "matchScore" | "createdAt" | "updatedAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    technicalQuestions?: boolean | Review$technicalQuestionsArgs<ExtArgs>
    behavioralQuestions?: boolean | Review$behavioralQuestionsArgs<ExtArgs>
    skillGaps?: boolean | Review$skillGapsArgs<ExtArgs>
    preparationPlans?: boolean | Review$preparationPlansArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ReviewCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      technicalQuestions: Prisma.$TechnicalQuestionPayload<ExtArgs>[]
      behavioralQuestions: Prisma.$BehavioralQuestionPayload<ExtArgs>[]
      skillGaps: Prisma.$SkillGapPayload<ExtArgs>[]
      preparationPlans: Prisma.$PreparationPlanPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      resume: string
      selfDescription: string | null
      jobDescription: string
      title: string
      matchScore: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    technicalQuestions<T extends Review$technicalQuestionsArgs<ExtArgs> = {}>(args?: Subset<T, Review$technicalQuestionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TechnicalQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    behavioralQuestions<T extends Review$behavioralQuestionsArgs<ExtArgs> = {}>(args?: Subset<T, Review$behavioralQuestionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BehavioralQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    skillGaps<T extends Review$skillGapsArgs<ExtArgs> = {}>(args?: Subset<T, Review$skillGapsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillGapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    preparationPlans<T extends Review$preparationPlansArgs<ExtArgs> = {}>(args?: Subset<T, Review$preparationPlansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreparationPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly userId: FieldRef<"Review", 'String'>
    readonly resume: FieldRef<"Review", 'String'>
    readonly selfDescription: FieldRef<"Review", 'String'>
    readonly jobDescription: FieldRef<"Review", 'String'>
    readonly title: FieldRef<"Review", 'String'>
    readonly matchScore: FieldRef<"Review", 'Float'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly updatedAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review.technicalQuestions
   */
  export type Review$technicalQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicalQuestion
     */
    select?: TechnicalQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechnicalQuestion
     */
    omit?: TechnicalQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicalQuestionInclude<ExtArgs> | null
    where?: TechnicalQuestionWhereInput
    orderBy?: TechnicalQuestionOrderByWithRelationInput | TechnicalQuestionOrderByWithRelationInput[]
    cursor?: TechnicalQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TechnicalQuestionScalarFieldEnum | TechnicalQuestionScalarFieldEnum[]
  }

  /**
   * Review.behavioralQuestions
   */
  export type Review$behavioralQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BehavioralQuestion
     */
    select?: BehavioralQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BehavioralQuestion
     */
    omit?: BehavioralQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BehavioralQuestionInclude<ExtArgs> | null
    where?: BehavioralQuestionWhereInput
    orderBy?: BehavioralQuestionOrderByWithRelationInput | BehavioralQuestionOrderByWithRelationInput[]
    cursor?: BehavioralQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BehavioralQuestionScalarFieldEnum | BehavioralQuestionScalarFieldEnum[]
  }

  /**
   * Review.skillGaps
   */
  export type Review$skillGapsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillGap
     */
    select?: SkillGapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillGap
     */
    omit?: SkillGapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillGapInclude<ExtArgs> | null
    where?: SkillGapWhereInput
    orderBy?: SkillGapOrderByWithRelationInput | SkillGapOrderByWithRelationInput[]
    cursor?: SkillGapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillGapScalarFieldEnum | SkillGapScalarFieldEnum[]
  }

  /**
   * Review.preparationPlans
   */
  export type Review$preparationPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreparationPlan
     */
    select?: PreparationPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreparationPlan
     */
    omit?: PreparationPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreparationPlanInclude<ExtArgs> | null
    where?: PreparationPlanWhereInput
    orderBy?: PreparationPlanOrderByWithRelationInput | PreparationPlanOrderByWithRelationInput[]
    cursor?: PreparationPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PreparationPlanScalarFieldEnum | PreparationPlanScalarFieldEnum[]
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model TechnicalQuestion
   */

  export type AggregateTechnicalQuestion = {
    _count: TechnicalQuestionCountAggregateOutputType | null
    _avg: TechnicalQuestionAvgAggregateOutputType | null
    _sum: TechnicalQuestionSumAggregateOutputType | null
    _min: TechnicalQuestionMinAggregateOutputType | null
    _max: TechnicalQuestionMaxAggregateOutputType | null
  }

  export type TechnicalQuestionAvgAggregateOutputType = {
    id: number | null
  }

  export type TechnicalQuestionSumAggregateOutputType = {
    id: number | null
  }

  export type TechnicalQuestionMinAggregateOutputType = {
    id: number | null
    reviewId: string | null
    question: string | null
    intention: string | null
    answer: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TechnicalQuestionMaxAggregateOutputType = {
    id: number | null
    reviewId: string | null
    question: string | null
    intention: string | null
    answer: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TechnicalQuestionCountAggregateOutputType = {
    id: number
    reviewId: number
    question: number
    intention: number
    answer: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TechnicalQuestionAvgAggregateInputType = {
    id?: true
  }

  export type TechnicalQuestionSumAggregateInputType = {
    id?: true
  }

  export type TechnicalQuestionMinAggregateInputType = {
    id?: true
    reviewId?: true
    question?: true
    intention?: true
    answer?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TechnicalQuestionMaxAggregateInputType = {
    id?: true
    reviewId?: true
    question?: true
    intention?: true
    answer?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TechnicalQuestionCountAggregateInputType = {
    id?: true
    reviewId?: true
    question?: true
    intention?: true
    answer?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TechnicalQuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TechnicalQuestion to aggregate.
     */
    where?: TechnicalQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TechnicalQuestions to fetch.
     */
    orderBy?: TechnicalQuestionOrderByWithRelationInput | TechnicalQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TechnicalQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TechnicalQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TechnicalQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TechnicalQuestions
    **/
    _count?: true | TechnicalQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TechnicalQuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TechnicalQuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TechnicalQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TechnicalQuestionMaxAggregateInputType
  }

  export type GetTechnicalQuestionAggregateType<T extends TechnicalQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateTechnicalQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTechnicalQuestion[P]>
      : GetScalarType<T[P], AggregateTechnicalQuestion[P]>
  }




  export type TechnicalQuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TechnicalQuestionWhereInput
    orderBy?: TechnicalQuestionOrderByWithAggregationInput | TechnicalQuestionOrderByWithAggregationInput[]
    by: TechnicalQuestionScalarFieldEnum[] | TechnicalQuestionScalarFieldEnum
    having?: TechnicalQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TechnicalQuestionCountAggregateInputType | true
    _avg?: TechnicalQuestionAvgAggregateInputType
    _sum?: TechnicalQuestionSumAggregateInputType
    _min?: TechnicalQuestionMinAggregateInputType
    _max?: TechnicalQuestionMaxAggregateInputType
  }

  export type TechnicalQuestionGroupByOutputType = {
    id: number
    reviewId: string
    question: string
    intention: string
    answer: string
    createdAt: Date
    updatedAt: Date
    _count: TechnicalQuestionCountAggregateOutputType | null
    _avg: TechnicalQuestionAvgAggregateOutputType | null
    _sum: TechnicalQuestionSumAggregateOutputType | null
    _min: TechnicalQuestionMinAggregateOutputType | null
    _max: TechnicalQuestionMaxAggregateOutputType | null
  }

  type GetTechnicalQuestionGroupByPayload<T extends TechnicalQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TechnicalQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TechnicalQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TechnicalQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], TechnicalQuestionGroupByOutputType[P]>
        }
      >
    >


  export type TechnicalQuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewId?: boolean
    question?: boolean
    intention?: boolean
    answer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["technicalQuestion"]>

  export type TechnicalQuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewId?: boolean
    question?: boolean
    intention?: boolean
    answer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["technicalQuestion"]>

  export type TechnicalQuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewId?: boolean
    question?: boolean
    intention?: boolean
    answer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["technicalQuestion"]>

  export type TechnicalQuestionSelectScalar = {
    id?: boolean
    reviewId?: boolean
    question?: boolean
    intention?: boolean
    answer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TechnicalQuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reviewId" | "question" | "intention" | "answer" | "createdAt" | "updatedAt", ExtArgs["result"]["technicalQuestion"]>
  export type TechnicalQuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }
  export type TechnicalQuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }
  export type TechnicalQuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }

  export type $TechnicalQuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TechnicalQuestion"
    objects: {
      review: Prisma.$ReviewPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      reviewId: string
      question: string
      intention: string
      answer: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["technicalQuestion"]>
    composites: {}
  }

  type TechnicalQuestionGetPayload<S extends boolean | null | undefined | TechnicalQuestionDefaultArgs> = $Result.GetResult<Prisma.$TechnicalQuestionPayload, S>

  type TechnicalQuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TechnicalQuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TechnicalQuestionCountAggregateInputType | true
    }

  export interface TechnicalQuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TechnicalQuestion'], meta: { name: 'TechnicalQuestion' } }
    /**
     * Find zero or one TechnicalQuestion that matches the filter.
     * @param {TechnicalQuestionFindUniqueArgs} args - Arguments to find a TechnicalQuestion
     * @example
     * // Get one TechnicalQuestion
     * const technicalQuestion = await prisma.technicalQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TechnicalQuestionFindUniqueArgs>(args: SelectSubset<T, TechnicalQuestionFindUniqueArgs<ExtArgs>>): Prisma__TechnicalQuestionClient<$Result.GetResult<Prisma.$TechnicalQuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TechnicalQuestion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TechnicalQuestionFindUniqueOrThrowArgs} args - Arguments to find a TechnicalQuestion
     * @example
     * // Get one TechnicalQuestion
     * const technicalQuestion = await prisma.technicalQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TechnicalQuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, TechnicalQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TechnicalQuestionClient<$Result.GetResult<Prisma.$TechnicalQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TechnicalQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicalQuestionFindFirstArgs} args - Arguments to find a TechnicalQuestion
     * @example
     * // Get one TechnicalQuestion
     * const technicalQuestion = await prisma.technicalQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TechnicalQuestionFindFirstArgs>(args?: SelectSubset<T, TechnicalQuestionFindFirstArgs<ExtArgs>>): Prisma__TechnicalQuestionClient<$Result.GetResult<Prisma.$TechnicalQuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TechnicalQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicalQuestionFindFirstOrThrowArgs} args - Arguments to find a TechnicalQuestion
     * @example
     * // Get one TechnicalQuestion
     * const technicalQuestion = await prisma.technicalQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TechnicalQuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, TechnicalQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TechnicalQuestionClient<$Result.GetResult<Prisma.$TechnicalQuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TechnicalQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicalQuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TechnicalQuestions
     * const technicalQuestions = await prisma.technicalQuestion.findMany()
     * 
     * // Get first 10 TechnicalQuestions
     * const technicalQuestions = await prisma.technicalQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const technicalQuestionWithIdOnly = await prisma.technicalQuestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TechnicalQuestionFindManyArgs>(args?: SelectSubset<T, TechnicalQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TechnicalQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TechnicalQuestion.
     * @param {TechnicalQuestionCreateArgs} args - Arguments to create a TechnicalQuestion.
     * @example
     * // Create one TechnicalQuestion
     * const TechnicalQuestion = await prisma.technicalQuestion.create({
     *   data: {
     *     // ... data to create a TechnicalQuestion
     *   }
     * })
     * 
     */
    create<T extends TechnicalQuestionCreateArgs>(args: SelectSubset<T, TechnicalQuestionCreateArgs<ExtArgs>>): Prisma__TechnicalQuestionClient<$Result.GetResult<Prisma.$TechnicalQuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TechnicalQuestions.
     * @param {TechnicalQuestionCreateManyArgs} args - Arguments to create many TechnicalQuestions.
     * @example
     * // Create many TechnicalQuestions
     * const technicalQuestion = await prisma.technicalQuestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TechnicalQuestionCreateManyArgs>(args?: SelectSubset<T, TechnicalQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TechnicalQuestions and returns the data saved in the database.
     * @param {TechnicalQuestionCreateManyAndReturnArgs} args - Arguments to create many TechnicalQuestions.
     * @example
     * // Create many TechnicalQuestions
     * const technicalQuestion = await prisma.technicalQuestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TechnicalQuestions and only return the `id`
     * const technicalQuestionWithIdOnly = await prisma.technicalQuestion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TechnicalQuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, TechnicalQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TechnicalQuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TechnicalQuestion.
     * @param {TechnicalQuestionDeleteArgs} args - Arguments to delete one TechnicalQuestion.
     * @example
     * // Delete one TechnicalQuestion
     * const TechnicalQuestion = await prisma.technicalQuestion.delete({
     *   where: {
     *     // ... filter to delete one TechnicalQuestion
     *   }
     * })
     * 
     */
    delete<T extends TechnicalQuestionDeleteArgs>(args: SelectSubset<T, TechnicalQuestionDeleteArgs<ExtArgs>>): Prisma__TechnicalQuestionClient<$Result.GetResult<Prisma.$TechnicalQuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TechnicalQuestion.
     * @param {TechnicalQuestionUpdateArgs} args - Arguments to update one TechnicalQuestion.
     * @example
     * // Update one TechnicalQuestion
     * const technicalQuestion = await prisma.technicalQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TechnicalQuestionUpdateArgs>(args: SelectSubset<T, TechnicalQuestionUpdateArgs<ExtArgs>>): Prisma__TechnicalQuestionClient<$Result.GetResult<Prisma.$TechnicalQuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TechnicalQuestions.
     * @param {TechnicalQuestionDeleteManyArgs} args - Arguments to filter TechnicalQuestions to delete.
     * @example
     * // Delete a few TechnicalQuestions
     * const { count } = await prisma.technicalQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TechnicalQuestionDeleteManyArgs>(args?: SelectSubset<T, TechnicalQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TechnicalQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicalQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TechnicalQuestions
     * const technicalQuestion = await prisma.technicalQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TechnicalQuestionUpdateManyArgs>(args: SelectSubset<T, TechnicalQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TechnicalQuestions and returns the data updated in the database.
     * @param {TechnicalQuestionUpdateManyAndReturnArgs} args - Arguments to update many TechnicalQuestions.
     * @example
     * // Update many TechnicalQuestions
     * const technicalQuestion = await prisma.technicalQuestion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TechnicalQuestions and only return the `id`
     * const technicalQuestionWithIdOnly = await prisma.technicalQuestion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TechnicalQuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, TechnicalQuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TechnicalQuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TechnicalQuestion.
     * @param {TechnicalQuestionUpsertArgs} args - Arguments to update or create a TechnicalQuestion.
     * @example
     * // Update or create a TechnicalQuestion
     * const technicalQuestion = await prisma.technicalQuestion.upsert({
     *   create: {
     *     // ... data to create a TechnicalQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TechnicalQuestion we want to update
     *   }
     * })
     */
    upsert<T extends TechnicalQuestionUpsertArgs>(args: SelectSubset<T, TechnicalQuestionUpsertArgs<ExtArgs>>): Prisma__TechnicalQuestionClient<$Result.GetResult<Prisma.$TechnicalQuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TechnicalQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicalQuestionCountArgs} args - Arguments to filter TechnicalQuestions to count.
     * @example
     * // Count the number of TechnicalQuestions
     * const count = await prisma.technicalQuestion.count({
     *   where: {
     *     // ... the filter for the TechnicalQuestions we want to count
     *   }
     * })
    **/
    count<T extends TechnicalQuestionCountArgs>(
      args?: Subset<T, TechnicalQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TechnicalQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TechnicalQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicalQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TechnicalQuestionAggregateArgs>(args: Subset<T, TechnicalQuestionAggregateArgs>): Prisma.PrismaPromise<GetTechnicalQuestionAggregateType<T>>

    /**
     * Group by TechnicalQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicalQuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TechnicalQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TechnicalQuestionGroupByArgs['orderBy'] }
        : { orderBy?: TechnicalQuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TechnicalQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTechnicalQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TechnicalQuestion model
   */
  readonly fields: TechnicalQuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TechnicalQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TechnicalQuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    review<T extends ReviewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReviewDefaultArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TechnicalQuestion model
   */
  interface TechnicalQuestionFieldRefs {
    readonly id: FieldRef<"TechnicalQuestion", 'Int'>
    readonly reviewId: FieldRef<"TechnicalQuestion", 'String'>
    readonly question: FieldRef<"TechnicalQuestion", 'String'>
    readonly intention: FieldRef<"TechnicalQuestion", 'String'>
    readonly answer: FieldRef<"TechnicalQuestion", 'String'>
    readonly createdAt: FieldRef<"TechnicalQuestion", 'DateTime'>
    readonly updatedAt: FieldRef<"TechnicalQuestion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TechnicalQuestion findUnique
   */
  export type TechnicalQuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicalQuestion
     */
    select?: TechnicalQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechnicalQuestion
     */
    omit?: TechnicalQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicalQuestionInclude<ExtArgs> | null
    /**
     * Filter, which TechnicalQuestion to fetch.
     */
    where: TechnicalQuestionWhereUniqueInput
  }

  /**
   * TechnicalQuestion findUniqueOrThrow
   */
  export type TechnicalQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicalQuestion
     */
    select?: TechnicalQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechnicalQuestion
     */
    omit?: TechnicalQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicalQuestionInclude<ExtArgs> | null
    /**
     * Filter, which TechnicalQuestion to fetch.
     */
    where: TechnicalQuestionWhereUniqueInput
  }

  /**
   * TechnicalQuestion findFirst
   */
  export type TechnicalQuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicalQuestion
     */
    select?: TechnicalQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechnicalQuestion
     */
    omit?: TechnicalQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicalQuestionInclude<ExtArgs> | null
    /**
     * Filter, which TechnicalQuestion to fetch.
     */
    where?: TechnicalQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TechnicalQuestions to fetch.
     */
    orderBy?: TechnicalQuestionOrderByWithRelationInput | TechnicalQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TechnicalQuestions.
     */
    cursor?: TechnicalQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TechnicalQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TechnicalQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TechnicalQuestions.
     */
    distinct?: TechnicalQuestionScalarFieldEnum | TechnicalQuestionScalarFieldEnum[]
  }

  /**
   * TechnicalQuestion findFirstOrThrow
   */
  export type TechnicalQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicalQuestion
     */
    select?: TechnicalQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechnicalQuestion
     */
    omit?: TechnicalQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicalQuestionInclude<ExtArgs> | null
    /**
     * Filter, which TechnicalQuestion to fetch.
     */
    where?: TechnicalQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TechnicalQuestions to fetch.
     */
    orderBy?: TechnicalQuestionOrderByWithRelationInput | TechnicalQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TechnicalQuestions.
     */
    cursor?: TechnicalQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TechnicalQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TechnicalQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TechnicalQuestions.
     */
    distinct?: TechnicalQuestionScalarFieldEnum | TechnicalQuestionScalarFieldEnum[]
  }

  /**
   * TechnicalQuestion findMany
   */
  export type TechnicalQuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicalQuestion
     */
    select?: TechnicalQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechnicalQuestion
     */
    omit?: TechnicalQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicalQuestionInclude<ExtArgs> | null
    /**
     * Filter, which TechnicalQuestions to fetch.
     */
    where?: TechnicalQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TechnicalQuestions to fetch.
     */
    orderBy?: TechnicalQuestionOrderByWithRelationInput | TechnicalQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TechnicalQuestions.
     */
    cursor?: TechnicalQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TechnicalQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TechnicalQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TechnicalQuestions.
     */
    distinct?: TechnicalQuestionScalarFieldEnum | TechnicalQuestionScalarFieldEnum[]
  }

  /**
   * TechnicalQuestion create
   */
  export type TechnicalQuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicalQuestion
     */
    select?: TechnicalQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechnicalQuestion
     */
    omit?: TechnicalQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicalQuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a TechnicalQuestion.
     */
    data: XOR<TechnicalQuestionCreateInput, TechnicalQuestionUncheckedCreateInput>
  }

  /**
   * TechnicalQuestion createMany
   */
  export type TechnicalQuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TechnicalQuestions.
     */
    data: TechnicalQuestionCreateManyInput | TechnicalQuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TechnicalQuestion createManyAndReturn
   */
  export type TechnicalQuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicalQuestion
     */
    select?: TechnicalQuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TechnicalQuestion
     */
    omit?: TechnicalQuestionOmit<ExtArgs> | null
    /**
     * The data used to create many TechnicalQuestions.
     */
    data: TechnicalQuestionCreateManyInput | TechnicalQuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicalQuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TechnicalQuestion update
   */
  export type TechnicalQuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicalQuestion
     */
    select?: TechnicalQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechnicalQuestion
     */
    omit?: TechnicalQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicalQuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a TechnicalQuestion.
     */
    data: XOR<TechnicalQuestionUpdateInput, TechnicalQuestionUncheckedUpdateInput>
    /**
     * Choose, which TechnicalQuestion to update.
     */
    where: TechnicalQuestionWhereUniqueInput
  }

  /**
   * TechnicalQuestion updateMany
   */
  export type TechnicalQuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TechnicalQuestions.
     */
    data: XOR<TechnicalQuestionUpdateManyMutationInput, TechnicalQuestionUncheckedUpdateManyInput>
    /**
     * Filter which TechnicalQuestions to update
     */
    where?: TechnicalQuestionWhereInput
    /**
     * Limit how many TechnicalQuestions to update.
     */
    limit?: number
  }

  /**
   * TechnicalQuestion updateManyAndReturn
   */
  export type TechnicalQuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicalQuestion
     */
    select?: TechnicalQuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TechnicalQuestion
     */
    omit?: TechnicalQuestionOmit<ExtArgs> | null
    /**
     * The data used to update TechnicalQuestions.
     */
    data: XOR<TechnicalQuestionUpdateManyMutationInput, TechnicalQuestionUncheckedUpdateManyInput>
    /**
     * Filter which TechnicalQuestions to update
     */
    where?: TechnicalQuestionWhereInput
    /**
     * Limit how many TechnicalQuestions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicalQuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TechnicalQuestion upsert
   */
  export type TechnicalQuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicalQuestion
     */
    select?: TechnicalQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechnicalQuestion
     */
    omit?: TechnicalQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicalQuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the TechnicalQuestion to update in case it exists.
     */
    where: TechnicalQuestionWhereUniqueInput
    /**
     * In case the TechnicalQuestion found by the `where` argument doesn't exist, create a new TechnicalQuestion with this data.
     */
    create: XOR<TechnicalQuestionCreateInput, TechnicalQuestionUncheckedCreateInput>
    /**
     * In case the TechnicalQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TechnicalQuestionUpdateInput, TechnicalQuestionUncheckedUpdateInput>
  }

  /**
   * TechnicalQuestion delete
   */
  export type TechnicalQuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicalQuestion
     */
    select?: TechnicalQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechnicalQuestion
     */
    omit?: TechnicalQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicalQuestionInclude<ExtArgs> | null
    /**
     * Filter which TechnicalQuestion to delete.
     */
    where: TechnicalQuestionWhereUniqueInput
  }

  /**
   * TechnicalQuestion deleteMany
   */
  export type TechnicalQuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TechnicalQuestions to delete
     */
    where?: TechnicalQuestionWhereInput
    /**
     * Limit how many TechnicalQuestions to delete.
     */
    limit?: number
  }

  /**
   * TechnicalQuestion without action
   */
  export type TechnicalQuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicalQuestion
     */
    select?: TechnicalQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechnicalQuestion
     */
    omit?: TechnicalQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicalQuestionInclude<ExtArgs> | null
  }


  /**
   * Model BehavioralQuestion
   */

  export type AggregateBehavioralQuestion = {
    _count: BehavioralQuestionCountAggregateOutputType | null
    _avg: BehavioralQuestionAvgAggregateOutputType | null
    _sum: BehavioralQuestionSumAggregateOutputType | null
    _min: BehavioralQuestionMinAggregateOutputType | null
    _max: BehavioralQuestionMaxAggregateOutputType | null
  }

  export type BehavioralQuestionAvgAggregateOutputType = {
    id: number | null
  }

  export type BehavioralQuestionSumAggregateOutputType = {
    id: number | null
  }

  export type BehavioralQuestionMinAggregateOutputType = {
    id: number | null
    reviewId: string | null
    question: string | null
    intention: string | null
    answer: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BehavioralQuestionMaxAggregateOutputType = {
    id: number | null
    reviewId: string | null
    question: string | null
    intention: string | null
    answer: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BehavioralQuestionCountAggregateOutputType = {
    id: number
    reviewId: number
    question: number
    intention: number
    answer: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BehavioralQuestionAvgAggregateInputType = {
    id?: true
  }

  export type BehavioralQuestionSumAggregateInputType = {
    id?: true
  }

  export type BehavioralQuestionMinAggregateInputType = {
    id?: true
    reviewId?: true
    question?: true
    intention?: true
    answer?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BehavioralQuestionMaxAggregateInputType = {
    id?: true
    reviewId?: true
    question?: true
    intention?: true
    answer?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BehavioralQuestionCountAggregateInputType = {
    id?: true
    reviewId?: true
    question?: true
    intention?: true
    answer?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BehavioralQuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BehavioralQuestion to aggregate.
     */
    where?: BehavioralQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BehavioralQuestions to fetch.
     */
    orderBy?: BehavioralQuestionOrderByWithRelationInput | BehavioralQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BehavioralQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BehavioralQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BehavioralQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BehavioralQuestions
    **/
    _count?: true | BehavioralQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BehavioralQuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BehavioralQuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BehavioralQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BehavioralQuestionMaxAggregateInputType
  }

  export type GetBehavioralQuestionAggregateType<T extends BehavioralQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateBehavioralQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBehavioralQuestion[P]>
      : GetScalarType<T[P], AggregateBehavioralQuestion[P]>
  }




  export type BehavioralQuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BehavioralQuestionWhereInput
    orderBy?: BehavioralQuestionOrderByWithAggregationInput | BehavioralQuestionOrderByWithAggregationInput[]
    by: BehavioralQuestionScalarFieldEnum[] | BehavioralQuestionScalarFieldEnum
    having?: BehavioralQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BehavioralQuestionCountAggregateInputType | true
    _avg?: BehavioralQuestionAvgAggregateInputType
    _sum?: BehavioralQuestionSumAggregateInputType
    _min?: BehavioralQuestionMinAggregateInputType
    _max?: BehavioralQuestionMaxAggregateInputType
  }

  export type BehavioralQuestionGroupByOutputType = {
    id: number
    reviewId: string
    question: string
    intention: string
    answer: string
    createdAt: Date
    updatedAt: Date
    _count: BehavioralQuestionCountAggregateOutputType | null
    _avg: BehavioralQuestionAvgAggregateOutputType | null
    _sum: BehavioralQuestionSumAggregateOutputType | null
    _min: BehavioralQuestionMinAggregateOutputType | null
    _max: BehavioralQuestionMaxAggregateOutputType | null
  }

  type GetBehavioralQuestionGroupByPayload<T extends BehavioralQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BehavioralQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BehavioralQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BehavioralQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], BehavioralQuestionGroupByOutputType[P]>
        }
      >
    >


  export type BehavioralQuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewId?: boolean
    question?: boolean
    intention?: boolean
    answer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["behavioralQuestion"]>

  export type BehavioralQuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewId?: boolean
    question?: boolean
    intention?: boolean
    answer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["behavioralQuestion"]>

  export type BehavioralQuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewId?: boolean
    question?: boolean
    intention?: boolean
    answer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["behavioralQuestion"]>

  export type BehavioralQuestionSelectScalar = {
    id?: boolean
    reviewId?: boolean
    question?: boolean
    intention?: boolean
    answer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BehavioralQuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reviewId" | "question" | "intention" | "answer" | "createdAt" | "updatedAt", ExtArgs["result"]["behavioralQuestion"]>
  export type BehavioralQuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }
  export type BehavioralQuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }
  export type BehavioralQuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }

  export type $BehavioralQuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BehavioralQuestion"
    objects: {
      review: Prisma.$ReviewPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      reviewId: string
      question: string
      intention: string
      answer: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["behavioralQuestion"]>
    composites: {}
  }

  type BehavioralQuestionGetPayload<S extends boolean | null | undefined | BehavioralQuestionDefaultArgs> = $Result.GetResult<Prisma.$BehavioralQuestionPayload, S>

  type BehavioralQuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BehavioralQuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BehavioralQuestionCountAggregateInputType | true
    }

  export interface BehavioralQuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BehavioralQuestion'], meta: { name: 'BehavioralQuestion' } }
    /**
     * Find zero or one BehavioralQuestion that matches the filter.
     * @param {BehavioralQuestionFindUniqueArgs} args - Arguments to find a BehavioralQuestion
     * @example
     * // Get one BehavioralQuestion
     * const behavioralQuestion = await prisma.behavioralQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BehavioralQuestionFindUniqueArgs>(args: SelectSubset<T, BehavioralQuestionFindUniqueArgs<ExtArgs>>): Prisma__BehavioralQuestionClient<$Result.GetResult<Prisma.$BehavioralQuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BehavioralQuestion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BehavioralQuestionFindUniqueOrThrowArgs} args - Arguments to find a BehavioralQuestion
     * @example
     * // Get one BehavioralQuestion
     * const behavioralQuestion = await prisma.behavioralQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BehavioralQuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, BehavioralQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BehavioralQuestionClient<$Result.GetResult<Prisma.$BehavioralQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BehavioralQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BehavioralQuestionFindFirstArgs} args - Arguments to find a BehavioralQuestion
     * @example
     * // Get one BehavioralQuestion
     * const behavioralQuestion = await prisma.behavioralQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BehavioralQuestionFindFirstArgs>(args?: SelectSubset<T, BehavioralQuestionFindFirstArgs<ExtArgs>>): Prisma__BehavioralQuestionClient<$Result.GetResult<Prisma.$BehavioralQuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BehavioralQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BehavioralQuestionFindFirstOrThrowArgs} args - Arguments to find a BehavioralQuestion
     * @example
     * // Get one BehavioralQuestion
     * const behavioralQuestion = await prisma.behavioralQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BehavioralQuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, BehavioralQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__BehavioralQuestionClient<$Result.GetResult<Prisma.$BehavioralQuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BehavioralQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BehavioralQuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BehavioralQuestions
     * const behavioralQuestions = await prisma.behavioralQuestion.findMany()
     * 
     * // Get first 10 BehavioralQuestions
     * const behavioralQuestions = await prisma.behavioralQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const behavioralQuestionWithIdOnly = await prisma.behavioralQuestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BehavioralQuestionFindManyArgs>(args?: SelectSubset<T, BehavioralQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BehavioralQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BehavioralQuestion.
     * @param {BehavioralQuestionCreateArgs} args - Arguments to create a BehavioralQuestion.
     * @example
     * // Create one BehavioralQuestion
     * const BehavioralQuestion = await prisma.behavioralQuestion.create({
     *   data: {
     *     // ... data to create a BehavioralQuestion
     *   }
     * })
     * 
     */
    create<T extends BehavioralQuestionCreateArgs>(args: SelectSubset<T, BehavioralQuestionCreateArgs<ExtArgs>>): Prisma__BehavioralQuestionClient<$Result.GetResult<Prisma.$BehavioralQuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BehavioralQuestions.
     * @param {BehavioralQuestionCreateManyArgs} args - Arguments to create many BehavioralQuestions.
     * @example
     * // Create many BehavioralQuestions
     * const behavioralQuestion = await prisma.behavioralQuestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BehavioralQuestionCreateManyArgs>(args?: SelectSubset<T, BehavioralQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BehavioralQuestions and returns the data saved in the database.
     * @param {BehavioralQuestionCreateManyAndReturnArgs} args - Arguments to create many BehavioralQuestions.
     * @example
     * // Create many BehavioralQuestions
     * const behavioralQuestion = await prisma.behavioralQuestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BehavioralQuestions and only return the `id`
     * const behavioralQuestionWithIdOnly = await prisma.behavioralQuestion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BehavioralQuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, BehavioralQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BehavioralQuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BehavioralQuestion.
     * @param {BehavioralQuestionDeleteArgs} args - Arguments to delete one BehavioralQuestion.
     * @example
     * // Delete one BehavioralQuestion
     * const BehavioralQuestion = await prisma.behavioralQuestion.delete({
     *   where: {
     *     // ... filter to delete one BehavioralQuestion
     *   }
     * })
     * 
     */
    delete<T extends BehavioralQuestionDeleteArgs>(args: SelectSubset<T, BehavioralQuestionDeleteArgs<ExtArgs>>): Prisma__BehavioralQuestionClient<$Result.GetResult<Prisma.$BehavioralQuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BehavioralQuestion.
     * @param {BehavioralQuestionUpdateArgs} args - Arguments to update one BehavioralQuestion.
     * @example
     * // Update one BehavioralQuestion
     * const behavioralQuestion = await prisma.behavioralQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BehavioralQuestionUpdateArgs>(args: SelectSubset<T, BehavioralQuestionUpdateArgs<ExtArgs>>): Prisma__BehavioralQuestionClient<$Result.GetResult<Prisma.$BehavioralQuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BehavioralQuestions.
     * @param {BehavioralQuestionDeleteManyArgs} args - Arguments to filter BehavioralQuestions to delete.
     * @example
     * // Delete a few BehavioralQuestions
     * const { count } = await prisma.behavioralQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BehavioralQuestionDeleteManyArgs>(args?: SelectSubset<T, BehavioralQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BehavioralQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BehavioralQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BehavioralQuestions
     * const behavioralQuestion = await prisma.behavioralQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BehavioralQuestionUpdateManyArgs>(args: SelectSubset<T, BehavioralQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BehavioralQuestions and returns the data updated in the database.
     * @param {BehavioralQuestionUpdateManyAndReturnArgs} args - Arguments to update many BehavioralQuestions.
     * @example
     * // Update many BehavioralQuestions
     * const behavioralQuestion = await prisma.behavioralQuestion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BehavioralQuestions and only return the `id`
     * const behavioralQuestionWithIdOnly = await prisma.behavioralQuestion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BehavioralQuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, BehavioralQuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BehavioralQuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BehavioralQuestion.
     * @param {BehavioralQuestionUpsertArgs} args - Arguments to update or create a BehavioralQuestion.
     * @example
     * // Update or create a BehavioralQuestion
     * const behavioralQuestion = await prisma.behavioralQuestion.upsert({
     *   create: {
     *     // ... data to create a BehavioralQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BehavioralQuestion we want to update
     *   }
     * })
     */
    upsert<T extends BehavioralQuestionUpsertArgs>(args: SelectSubset<T, BehavioralQuestionUpsertArgs<ExtArgs>>): Prisma__BehavioralQuestionClient<$Result.GetResult<Prisma.$BehavioralQuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BehavioralQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BehavioralQuestionCountArgs} args - Arguments to filter BehavioralQuestions to count.
     * @example
     * // Count the number of BehavioralQuestions
     * const count = await prisma.behavioralQuestion.count({
     *   where: {
     *     // ... the filter for the BehavioralQuestions we want to count
     *   }
     * })
    **/
    count<T extends BehavioralQuestionCountArgs>(
      args?: Subset<T, BehavioralQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BehavioralQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BehavioralQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BehavioralQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BehavioralQuestionAggregateArgs>(args: Subset<T, BehavioralQuestionAggregateArgs>): Prisma.PrismaPromise<GetBehavioralQuestionAggregateType<T>>

    /**
     * Group by BehavioralQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BehavioralQuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BehavioralQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BehavioralQuestionGroupByArgs['orderBy'] }
        : { orderBy?: BehavioralQuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BehavioralQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBehavioralQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BehavioralQuestion model
   */
  readonly fields: BehavioralQuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BehavioralQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BehavioralQuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    review<T extends ReviewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReviewDefaultArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BehavioralQuestion model
   */
  interface BehavioralQuestionFieldRefs {
    readonly id: FieldRef<"BehavioralQuestion", 'Int'>
    readonly reviewId: FieldRef<"BehavioralQuestion", 'String'>
    readonly question: FieldRef<"BehavioralQuestion", 'String'>
    readonly intention: FieldRef<"BehavioralQuestion", 'String'>
    readonly answer: FieldRef<"BehavioralQuestion", 'String'>
    readonly createdAt: FieldRef<"BehavioralQuestion", 'DateTime'>
    readonly updatedAt: FieldRef<"BehavioralQuestion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BehavioralQuestion findUnique
   */
  export type BehavioralQuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BehavioralQuestion
     */
    select?: BehavioralQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BehavioralQuestion
     */
    omit?: BehavioralQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BehavioralQuestionInclude<ExtArgs> | null
    /**
     * Filter, which BehavioralQuestion to fetch.
     */
    where: BehavioralQuestionWhereUniqueInput
  }

  /**
   * BehavioralQuestion findUniqueOrThrow
   */
  export type BehavioralQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BehavioralQuestion
     */
    select?: BehavioralQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BehavioralQuestion
     */
    omit?: BehavioralQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BehavioralQuestionInclude<ExtArgs> | null
    /**
     * Filter, which BehavioralQuestion to fetch.
     */
    where: BehavioralQuestionWhereUniqueInput
  }

  /**
   * BehavioralQuestion findFirst
   */
  export type BehavioralQuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BehavioralQuestion
     */
    select?: BehavioralQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BehavioralQuestion
     */
    omit?: BehavioralQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BehavioralQuestionInclude<ExtArgs> | null
    /**
     * Filter, which BehavioralQuestion to fetch.
     */
    where?: BehavioralQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BehavioralQuestions to fetch.
     */
    orderBy?: BehavioralQuestionOrderByWithRelationInput | BehavioralQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BehavioralQuestions.
     */
    cursor?: BehavioralQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BehavioralQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BehavioralQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BehavioralQuestions.
     */
    distinct?: BehavioralQuestionScalarFieldEnum | BehavioralQuestionScalarFieldEnum[]
  }

  /**
   * BehavioralQuestion findFirstOrThrow
   */
  export type BehavioralQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BehavioralQuestion
     */
    select?: BehavioralQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BehavioralQuestion
     */
    omit?: BehavioralQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BehavioralQuestionInclude<ExtArgs> | null
    /**
     * Filter, which BehavioralQuestion to fetch.
     */
    where?: BehavioralQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BehavioralQuestions to fetch.
     */
    orderBy?: BehavioralQuestionOrderByWithRelationInput | BehavioralQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BehavioralQuestions.
     */
    cursor?: BehavioralQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BehavioralQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BehavioralQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BehavioralQuestions.
     */
    distinct?: BehavioralQuestionScalarFieldEnum | BehavioralQuestionScalarFieldEnum[]
  }

  /**
   * BehavioralQuestion findMany
   */
  export type BehavioralQuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BehavioralQuestion
     */
    select?: BehavioralQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BehavioralQuestion
     */
    omit?: BehavioralQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BehavioralQuestionInclude<ExtArgs> | null
    /**
     * Filter, which BehavioralQuestions to fetch.
     */
    where?: BehavioralQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BehavioralQuestions to fetch.
     */
    orderBy?: BehavioralQuestionOrderByWithRelationInput | BehavioralQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BehavioralQuestions.
     */
    cursor?: BehavioralQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BehavioralQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BehavioralQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BehavioralQuestions.
     */
    distinct?: BehavioralQuestionScalarFieldEnum | BehavioralQuestionScalarFieldEnum[]
  }

  /**
   * BehavioralQuestion create
   */
  export type BehavioralQuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BehavioralQuestion
     */
    select?: BehavioralQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BehavioralQuestion
     */
    omit?: BehavioralQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BehavioralQuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a BehavioralQuestion.
     */
    data: XOR<BehavioralQuestionCreateInput, BehavioralQuestionUncheckedCreateInput>
  }

  /**
   * BehavioralQuestion createMany
   */
  export type BehavioralQuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BehavioralQuestions.
     */
    data: BehavioralQuestionCreateManyInput | BehavioralQuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BehavioralQuestion createManyAndReturn
   */
  export type BehavioralQuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BehavioralQuestion
     */
    select?: BehavioralQuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BehavioralQuestion
     */
    omit?: BehavioralQuestionOmit<ExtArgs> | null
    /**
     * The data used to create many BehavioralQuestions.
     */
    data: BehavioralQuestionCreateManyInput | BehavioralQuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BehavioralQuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BehavioralQuestion update
   */
  export type BehavioralQuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BehavioralQuestion
     */
    select?: BehavioralQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BehavioralQuestion
     */
    omit?: BehavioralQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BehavioralQuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a BehavioralQuestion.
     */
    data: XOR<BehavioralQuestionUpdateInput, BehavioralQuestionUncheckedUpdateInput>
    /**
     * Choose, which BehavioralQuestion to update.
     */
    where: BehavioralQuestionWhereUniqueInput
  }

  /**
   * BehavioralQuestion updateMany
   */
  export type BehavioralQuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BehavioralQuestions.
     */
    data: XOR<BehavioralQuestionUpdateManyMutationInput, BehavioralQuestionUncheckedUpdateManyInput>
    /**
     * Filter which BehavioralQuestions to update
     */
    where?: BehavioralQuestionWhereInput
    /**
     * Limit how many BehavioralQuestions to update.
     */
    limit?: number
  }

  /**
   * BehavioralQuestion updateManyAndReturn
   */
  export type BehavioralQuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BehavioralQuestion
     */
    select?: BehavioralQuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BehavioralQuestion
     */
    omit?: BehavioralQuestionOmit<ExtArgs> | null
    /**
     * The data used to update BehavioralQuestions.
     */
    data: XOR<BehavioralQuestionUpdateManyMutationInput, BehavioralQuestionUncheckedUpdateManyInput>
    /**
     * Filter which BehavioralQuestions to update
     */
    where?: BehavioralQuestionWhereInput
    /**
     * Limit how many BehavioralQuestions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BehavioralQuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BehavioralQuestion upsert
   */
  export type BehavioralQuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BehavioralQuestion
     */
    select?: BehavioralQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BehavioralQuestion
     */
    omit?: BehavioralQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BehavioralQuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the BehavioralQuestion to update in case it exists.
     */
    where: BehavioralQuestionWhereUniqueInput
    /**
     * In case the BehavioralQuestion found by the `where` argument doesn't exist, create a new BehavioralQuestion with this data.
     */
    create: XOR<BehavioralQuestionCreateInput, BehavioralQuestionUncheckedCreateInput>
    /**
     * In case the BehavioralQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BehavioralQuestionUpdateInput, BehavioralQuestionUncheckedUpdateInput>
  }

  /**
   * BehavioralQuestion delete
   */
  export type BehavioralQuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BehavioralQuestion
     */
    select?: BehavioralQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BehavioralQuestion
     */
    omit?: BehavioralQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BehavioralQuestionInclude<ExtArgs> | null
    /**
     * Filter which BehavioralQuestion to delete.
     */
    where: BehavioralQuestionWhereUniqueInput
  }

  /**
   * BehavioralQuestion deleteMany
   */
  export type BehavioralQuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BehavioralQuestions to delete
     */
    where?: BehavioralQuestionWhereInput
    /**
     * Limit how many BehavioralQuestions to delete.
     */
    limit?: number
  }

  /**
   * BehavioralQuestion without action
   */
  export type BehavioralQuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BehavioralQuestion
     */
    select?: BehavioralQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BehavioralQuestion
     */
    omit?: BehavioralQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BehavioralQuestionInclude<ExtArgs> | null
  }


  /**
   * Model SkillGap
   */

  export type AggregateSkillGap = {
    _count: SkillGapCountAggregateOutputType | null
    _avg: SkillGapAvgAggregateOutputType | null
    _sum: SkillGapSumAggregateOutputType | null
    _min: SkillGapMinAggregateOutputType | null
    _max: SkillGapMaxAggregateOutputType | null
  }

  export type SkillGapAvgAggregateOutputType = {
    id: number | null
  }

  export type SkillGapSumAggregateOutputType = {
    id: number | null
  }

  export type SkillGapMinAggregateOutputType = {
    id: number | null
    reviewId: string | null
    skill: string | null
    severity: $Enums.Severity | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SkillGapMaxAggregateOutputType = {
    id: number | null
    reviewId: string | null
    skill: string | null
    severity: $Enums.Severity | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SkillGapCountAggregateOutputType = {
    id: number
    reviewId: number
    skill: number
    severity: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SkillGapAvgAggregateInputType = {
    id?: true
  }

  export type SkillGapSumAggregateInputType = {
    id?: true
  }

  export type SkillGapMinAggregateInputType = {
    id?: true
    reviewId?: true
    skill?: true
    severity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SkillGapMaxAggregateInputType = {
    id?: true
    reviewId?: true
    skill?: true
    severity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SkillGapCountAggregateInputType = {
    id?: true
    reviewId?: true
    skill?: true
    severity?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SkillGapAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SkillGap to aggregate.
     */
    where?: SkillGapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillGaps to fetch.
     */
    orderBy?: SkillGapOrderByWithRelationInput | SkillGapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillGapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillGaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillGaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SkillGaps
    **/
    _count?: true | SkillGapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkillGapAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkillGapSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillGapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillGapMaxAggregateInputType
  }

  export type GetSkillGapAggregateType<T extends SkillGapAggregateArgs> = {
        [P in keyof T & keyof AggregateSkillGap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkillGap[P]>
      : GetScalarType<T[P], AggregateSkillGap[P]>
  }




  export type SkillGapGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillGapWhereInput
    orderBy?: SkillGapOrderByWithAggregationInput | SkillGapOrderByWithAggregationInput[]
    by: SkillGapScalarFieldEnum[] | SkillGapScalarFieldEnum
    having?: SkillGapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillGapCountAggregateInputType | true
    _avg?: SkillGapAvgAggregateInputType
    _sum?: SkillGapSumAggregateInputType
    _min?: SkillGapMinAggregateInputType
    _max?: SkillGapMaxAggregateInputType
  }

  export type SkillGapGroupByOutputType = {
    id: number
    reviewId: string
    skill: string
    severity: $Enums.Severity
    createdAt: Date
    updatedAt: Date
    _count: SkillGapCountAggregateOutputType | null
    _avg: SkillGapAvgAggregateOutputType | null
    _sum: SkillGapSumAggregateOutputType | null
    _min: SkillGapMinAggregateOutputType | null
    _max: SkillGapMaxAggregateOutputType | null
  }

  type GetSkillGapGroupByPayload<T extends SkillGapGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillGapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillGapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGapGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGapGroupByOutputType[P]>
        }
      >
    >


  export type SkillGapSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewId?: boolean
    skill?: boolean
    severity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skillGap"]>

  export type SkillGapSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewId?: boolean
    skill?: boolean
    severity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skillGap"]>

  export type SkillGapSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewId?: boolean
    skill?: boolean
    severity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skillGap"]>

  export type SkillGapSelectScalar = {
    id?: boolean
    reviewId?: boolean
    skill?: boolean
    severity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SkillGapOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reviewId" | "skill" | "severity" | "createdAt" | "updatedAt", ExtArgs["result"]["skillGap"]>
  export type SkillGapInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }
  export type SkillGapIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }
  export type SkillGapIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }

  export type $SkillGapPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SkillGap"
    objects: {
      review: Prisma.$ReviewPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      reviewId: string
      skill: string
      severity: $Enums.Severity
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["skillGap"]>
    composites: {}
  }

  type SkillGapGetPayload<S extends boolean | null | undefined | SkillGapDefaultArgs> = $Result.GetResult<Prisma.$SkillGapPayload, S>

  type SkillGapCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillGapFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillGapCountAggregateInputType | true
    }

  export interface SkillGapDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SkillGap'], meta: { name: 'SkillGap' } }
    /**
     * Find zero or one SkillGap that matches the filter.
     * @param {SkillGapFindUniqueArgs} args - Arguments to find a SkillGap
     * @example
     * // Get one SkillGap
     * const skillGap = await prisma.skillGap.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillGapFindUniqueArgs>(args: SelectSubset<T, SkillGapFindUniqueArgs<ExtArgs>>): Prisma__SkillGapClient<$Result.GetResult<Prisma.$SkillGapPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SkillGap that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillGapFindUniqueOrThrowArgs} args - Arguments to find a SkillGap
     * @example
     * // Get one SkillGap
     * const skillGap = await prisma.skillGap.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillGapFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillGapFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillGapClient<$Result.GetResult<Prisma.$SkillGapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkillGap that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGapFindFirstArgs} args - Arguments to find a SkillGap
     * @example
     * // Get one SkillGap
     * const skillGap = await prisma.skillGap.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillGapFindFirstArgs>(args?: SelectSubset<T, SkillGapFindFirstArgs<ExtArgs>>): Prisma__SkillGapClient<$Result.GetResult<Prisma.$SkillGapPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkillGap that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGapFindFirstOrThrowArgs} args - Arguments to find a SkillGap
     * @example
     * // Get one SkillGap
     * const skillGap = await prisma.skillGap.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillGapFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillGapFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillGapClient<$Result.GetResult<Prisma.$SkillGapPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SkillGaps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGapFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SkillGaps
     * const skillGaps = await prisma.skillGap.findMany()
     * 
     * // Get first 10 SkillGaps
     * const skillGaps = await prisma.skillGap.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillGapWithIdOnly = await prisma.skillGap.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillGapFindManyArgs>(args?: SelectSubset<T, SkillGapFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillGapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SkillGap.
     * @param {SkillGapCreateArgs} args - Arguments to create a SkillGap.
     * @example
     * // Create one SkillGap
     * const SkillGap = await prisma.skillGap.create({
     *   data: {
     *     // ... data to create a SkillGap
     *   }
     * })
     * 
     */
    create<T extends SkillGapCreateArgs>(args: SelectSubset<T, SkillGapCreateArgs<ExtArgs>>): Prisma__SkillGapClient<$Result.GetResult<Prisma.$SkillGapPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SkillGaps.
     * @param {SkillGapCreateManyArgs} args - Arguments to create many SkillGaps.
     * @example
     * // Create many SkillGaps
     * const skillGap = await prisma.skillGap.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillGapCreateManyArgs>(args?: SelectSubset<T, SkillGapCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SkillGaps and returns the data saved in the database.
     * @param {SkillGapCreateManyAndReturnArgs} args - Arguments to create many SkillGaps.
     * @example
     * // Create many SkillGaps
     * const skillGap = await prisma.skillGap.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SkillGaps and only return the `id`
     * const skillGapWithIdOnly = await prisma.skillGap.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillGapCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillGapCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillGapPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SkillGap.
     * @param {SkillGapDeleteArgs} args - Arguments to delete one SkillGap.
     * @example
     * // Delete one SkillGap
     * const SkillGap = await prisma.skillGap.delete({
     *   where: {
     *     // ... filter to delete one SkillGap
     *   }
     * })
     * 
     */
    delete<T extends SkillGapDeleteArgs>(args: SelectSubset<T, SkillGapDeleteArgs<ExtArgs>>): Prisma__SkillGapClient<$Result.GetResult<Prisma.$SkillGapPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SkillGap.
     * @param {SkillGapUpdateArgs} args - Arguments to update one SkillGap.
     * @example
     * // Update one SkillGap
     * const skillGap = await prisma.skillGap.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillGapUpdateArgs>(args: SelectSubset<T, SkillGapUpdateArgs<ExtArgs>>): Prisma__SkillGapClient<$Result.GetResult<Prisma.$SkillGapPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SkillGaps.
     * @param {SkillGapDeleteManyArgs} args - Arguments to filter SkillGaps to delete.
     * @example
     * // Delete a few SkillGaps
     * const { count } = await prisma.skillGap.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillGapDeleteManyArgs>(args?: SelectSubset<T, SkillGapDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkillGaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SkillGaps
     * const skillGap = await prisma.skillGap.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillGapUpdateManyArgs>(args: SelectSubset<T, SkillGapUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkillGaps and returns the data updated in the database.
     * @param {SkillGapUpdateManyAndReturnArgs} args - Arguments to update many SkillGaps.
     * @example
     * // Update many SkillGaps
     * const skillGap = await prisma.skillGap.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SkillGaps and only return the `id`
     * const skillGapWithIdOnly = await prisma.skillGap.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SkillGapUpdateManyAndReturnArgs>(args: SelectSubset<T, SkillGapUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillGapPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SkillGap.
     * @param {SkillGapUpsertArgs} args - Arguments to update or create a SkillGap.
     * @example
     * // Update or create a SkillGap
     * const skillGap = await prisma.skillGap.upsert({
     *   create: {
     *     // ... data to create a SkillGap
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SkillGap we want to update
     *   }
     * })
     */
    upsert<T extends SkillGapUpsertArgs>(args: SelectSubset<T, SkillGapUpsertArgs<ExtArgs>>): Prisma__SkillGapClient<$Result.GetResult<Prisma.$SkillGapPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SkillGaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGapCountArgs} args - Arguments to filter SkillGaps to count.
     * @example
     * // Count the number of SkillGaps
     * const count = await prisma.skillGap.count({
     *   where: {
     *     // ... the filter for the SkillGaps we want to count
     *   }
     * })
    **/
    count<T extends SkillGapCountArgs>(
      args?: Subset<T, SkillGapCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillGapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SkillGap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SkillGapAggregateArgs>(args: Subset<T, SkillGapAggregateArgs>): Prisma.PrismaPromise<GetSkillGapAggregateType<T>>

    /**
     * Group by SkillGap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGapGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SkillGapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillGapGroupByArgs['orderBy'] }
        : { orderBy?: SkillGapGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SkillGapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SkillGap model
   */
  readonly fields: SkillGapFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SkillGap.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillGapClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    review<T extends ReviewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReviewDefaultArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SkillGap model
   */
  interface SkillGapFieldRefs {
    readonly id: FieldRef<"SkillGap", 'Int'>
    readonly reviewId: FieldRef<"SkillGap", 'String'>
    readonly skill: FieldRef<"SkillGap", 'String'>
    readonly severity: FieldRef<"SkillGap", 'Severity'>
    readonly createdAt: FieldRef<"SkillGap", 'DateTime'>
    readonly updatedAt: FieldRef<"SkillGap", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SkillGap findUnique
   */
  export type SkillGapFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillGap
     */
    select?: SkillGapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillGap
     */
    omit?: SkillGapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillGapInclude<ExtArgs> | null
    /**
     * Filter, which SkillGap to fetch.
     */
    where: SkillGapWhereUniqueInput
  }

  /**
   * SkillGap findUniqueOrThrow
   */
  export type SkillGapFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillGap
     */
    select?: SkillGapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillGap
     */
    omit?: SkillGapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillGapInclude<ExtArgs> | null
    /**
     * Filter, which SkillGap to fetch.
     */
    where: SkillGapWhereUniqueInput
  }

  /**
   * SkillGap findFirst
   */
  export type SkillGapFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillGap
     */
    select?: SkillGapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillGap
     */
    omit?: SkillGapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillGapInclude<ExtArgs> | null
    /**
     * Filter, which SkillGap to fetch.
     */
    where?: SkillGapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillGaps to fetch.
     */
    orderBy?: SkillGapOrderByWithRelationInput | SkillGapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SkillGaps.
     */
    cursor?: SkillGapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillGaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillGaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SkillGaps.
     */
    distinct?: SkillGapScalarFieldEnum | SkillGapScalarFieldEnum[]
  }

  /**
   * SkillGap findFirstOrThrow
   */
  export type SkillGapFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillGap
     */
    select?: SkillGapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillGap
     */
    omit?: SkillGapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillGapInclude<ExtArgs> | null
    /**
     * Filter, which SkillGap to fetch.
     */
    where?: SkillGapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillGaps to fetch.
     */
    orderBy?: SkillGapOrderByWithRelationInput | SkillGapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SkillGaps.
     */
    cursor?: SkillGapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillGaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillGaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SkillGaps.
     */
    distinct?: SkillGapScalarFieldEnum | SkillGapScalarFieldEnum[]
  }

  /**
   * SkillGap findMany
   */
  export type SkillGapFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillGap
     */
    select?: SkillGapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillGap
     */
    omit?: SkillGapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillGapInclude<ExtArgs> | null
    /**
     * Filter, which SkillGaps to fetch.
     */
    where?: SkillGapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillGaps to fetch.
     */
    orderBy?: SkillGapOrderByWithRelationInput | SkillGapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SkillGaps.
     */
    cursor?: SkillGapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillGaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillGaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SkillGaps.
     */
    distinct?: SkillGapScalarFieldEnum | SkillGapScalarFieldEnum[]
  }

  /**
   * SkillGap create
   */
  export type SkillGapCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillGap
     */
    select?: SkillGapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillGap
     */
    omit?: SkillGapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillGapInclude<ExtArgs> | null
    /**
     * The data needed to create a SkillGap.
     */
    data: XOR<SkillGapCreateInput, SkillGapUncheckedCreateInput>
  }

  /**
   * SkillGap createMany
   */
  export type SkillGapCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SkillGaps.
     */
    data: SkillGapCreateManyInput | SkillGapCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SkillGap createManyAndReturn
   */
  export type SkillGapCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillGap
     */
    select?: SkillGapSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SkillGap
     */
    omit?: SkillGapOmit<ExtArgs> | null
    /**
     * The data used to create many SkillGaps.
     */
    data: SkillGapCreateManyInput | SkillGapCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillGapIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SkillGap update
   */
  export type SkillGapUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillGap
     */
    select?: SkillGapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillGap
     */
    omit?: SkillGapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillGapInclude<ExtArgs> | null
    /**
     * The data needed to update a SkillGap.
     */
    data: XOR<SkillGapUpdateInput, SkillGapUncheckedUpdateInput>
    /**
     * Choose, which SkillGap to update.
     */
    where: SkillGapWhereUniqueInput
  }

  /**
   * SkillGap updateMany
   */
  export type SkillGapUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SkillGaps.
     */
    data: XOR<SkillGapUpdateManyMutationInput, SkillGapUncheckedUpdateManyInput>
    /**
     * Filter which SkillGaps to update
     */
    where?: SkillGapWhereInput
    /**
     * Limit how many SkillGaps to update.
     */
    limit?: number
  }

  /**
   * SkillGap updateManyAndReturn
   */
  export type SkillGapUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillGap
     */
    select?: SkillGapSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SkillGap
     */
    omit?: SkillGapOmit<ExtArgs> | null
    /**
     * The data used to update SkillGaps.
     */
    data: XOR<SkillGapUpdateManyMutationInput, SkillGapUncheckedUpdateManyInput>
    /**
     * Filter which SkillGaps to update
     */
    where?: SkillGapWhereInput
    /**
     * Limit how many SkillGaps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillGapIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SkillGap upsert
   */
  export type SkillGapUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillGap
     */
    select?: SkillGapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillGap
     */
    omit?: SkillGapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillGapInclude<ExtArgs> | null
    /**
     * The filter to search for the SkillGap to update in case it exists.
     */
    where: SkillGapWhereUniqueInput
    /**
     * In case the SkillGap found by the `where` argument doesn't exist, create a new SkillGap with this data.
     */
    create: XOR<SkillGapCreateInput, SkillGapUncheckedCreateInput>
    /**
     * In case the SkillGap was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillGapUpdateInput, SkillGapUncheckedUpdateInput>
  }

  /**
   * SkillGap delete
   */
  export type SkillGapDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillGap
     */
    select?: SkillGapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillGap
     */
    omit?: SkillGapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillGapInclude<ExtArgs> | null
    /**
     * Filter which SkillGap to delete.
     */
    where: SkillGapWhereUniqueInput
  }

  /**
   * SkillGap deleteMany
   */
  export type SkillGapDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SkillGaps to delete
     */
    where?: SkillGapWhereInput
    /**
     * Limit how many SkillGaps to delete.
     */
    limit?: number
  }

  /**
   * SkillGap without action
   */
  export type SkillGapDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillGap
     */
    select?: SkillGapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillGap
     */
    omit?: SkillGapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillGapInclude<ExtArgs> | null
  }


  /**
   * Model PreparationPlan
   */

  export type AggregatePreparationPlan = {
    _count: PreparationPlanCountAggregateOutputType | null
    _avg: PreparationPlanAvgAggregateOutputType | null
    _sum: PreparationPlanSumAggregateOutputType | null
    _min: PreparationPlanMinAggregateOutputType | null
    _max: PreparationPlanMaxAggregateOutputType | null
  }

  export type PreparationPlanAvgAggregateOutputType = {
    id: number | null
    day: number | null
  }

  export type PreparationPlanSumAggregateOutputType = {
    id: number | null
    day: number | null
  }

  export type PreparationPlanMinAggregateOutputType = {
    id: number | null
    reviewId: string | null
    day: number | null
    focus: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PreparationPlanMaxAggregateOutputType = {
    id: number | null
    reviewId: string | null
    day: number | null
    focus: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PreparationPlanCountAggregateOutputType = {
    id: number
    reviewId: number
    day: number
    focus: number
    tasks: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PreparationPlanAvgAggregateInputType = {
    id?: true
    day?: true
  }

  export type PreparationPlanSumAggregateInputType = {
    id?: true
    day?: true
  }

  export type PreparationPlanMinAggregateInputType = {
    id?: true
    reviewId?: true
    day?: true
    focus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PreparationPlanMaxAggregateInputType = {
    id?: true
    reviewId?: true
    day?: true
    focus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PreparationPlanCountAggregateInputType = {
    id?: true
    reviewId?: true
    day?: true
    focus?: true
    tasks?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PreparationPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PreparationPlan to aggregate.
     */
    where?: PreparationPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PreparationPlans to fetch.
     */
    orderBy?: PreparationPlanOrderByWithRelationInput | PreparationPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PreparationPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PreparationPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PreparationPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PreparationPlans
    **/
    _count?: true | PreparationPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PreparationPlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PreparationPlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PreparationPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PreparationPlanMaxAggregateInputType
  }

  export type GetPreparationPlanAggregateType<T extends PreparationPlanAggregateArgs> = {
        [P in keyof T & keyof AggregatePreparationPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePreparationPlan[P]>
      : GetScalarType<T[P], AggregatePreparationPlan[P]>
  }




  export type PreparationPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PreparationPlanWhereInput
    orderBy?: PreparationPlanOrderByWithAggregationInput | PreparationPlanOrderByWithAggregationInput[]
    by: PreparationPlanScalarFieldEnum[] | PreparationPlanScalarFieldEnum
    having?: PreparationPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PreparationPlanCountAggregateInputType | true
    _avg?: PreparationPlanAvgAggregateInputType
    _sum?: PreparationPlanSumAggregateInputType
    _min?: PreparationPlanMinAggregateInputType
    _max?: PreparationPlanMaxAggregateInputType
  }

  export type PreparationPlanGroupByOutputType = {
    id: number
    reviewId: string
    day: number
    focus: string
    tasks: string[]
    createdAt: Date
    updatedAt: Date
    _count: PreparationPlanCountAggregateOutputType | null
    _avg: PreparationPlanAvgAggregateOutputType | null
    _sum: PreparationPlanSumAggregateOutputType | null
    _min: PreparationPlanMinAggregateOutputType | null
    _max: PreparationPlanMaxAggregateOutputType | null
  }

  type GetPreparationPlanGroupByPayload<T extends PreparationPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PreparationPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PreparationPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PreparationPlanGroupByOutputType[P]>
            : GetScalarType<T[P], PreparationPlanGroupByOutputType[P]>
        }
      >
    >


  export type PreparationPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewId?: boolean
    day?: boolean
    focus?: boolean
    tasks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preparationPlan"]>

  export type PreparationPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewId?: boolean
    day?: boolean
    focus?: boolean
    tasks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preparationPlan"]>

  export type PreparationPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewId?: boolean
    day?: boolean
    focus?: boolean
    tasks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preparationPlan"]>

  export type PreparationPlanSelectScalar = {
    id?: boolean
    reviewId?: boolean
    day?: boolean
    focus?: boolean
    tasks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PreparationPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reviewId" | "day" | "focus" | "tasks" | "createdAt" | "updatedAt", ExtArgs["result"]["preparationPlan"]>
  export type PreparationPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }
  export type PreparationPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }
  export type PreparationPlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }

  export type $PreparationPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PreparationPlan"
    objects: {
      review: Prisma.$ReviewPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      reviewId: string
      day: number
      focus: string
      tasks: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["preparationPlan"]>
    composites: {}
  }

  type PreparationPlanGetPayload<S extends boolean | null | undefined | PreparationPlanDefaultArgs> = $Result.GetResult<Prisma.$PreparationPlanPayload, S>

  type PreparationPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PreparationPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PreparationPlanCountAggregateInputType | true
    }

  export interface PreparationPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PreparationPlan'], meta: { name: 'PreparationPlan' } }
    /**
     * Find zero or one PreparationPlan that matches the filter.
     * @param {PreparationPlanFindUniqueArgs} args - Arguments to find a PreparationPlan
     * @example
     * // Get one PreparationPlan
     * const preparationPlan = await prisma.preparationPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PreparationPlanFindUniqueArgs>(args: SelectSubset<T, PreparationPlanFindUniqueArgs<ExtArgs>>): Prisma__PreparationPlanClient<$Result.GetResult<Prisma.$PreparationPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PreparationPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PreparationPlanFindUniqueOrThrowArgs} args - Arguments to find a PreparationPlan
     * @example
     * // Get one PreparationPlan
     * const preparationPlan = await prisma.preparationPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PreparationPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, PreparationPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PreparationPlanClient<$Result.GetResult<Prisma.$PreparationPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PreparationPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreparationPlanFindFirstArgs} args - Arguments to find a PreparationPlan
     * @example
     * // Get one PreparationPlan
     * const preparationPlan = await prisma.preparationPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PreparationPlanFindFirstArgs>(args?: SelectSubset<T, PreparationPlanFindFirstArgs<ExtArgs>>): Prisma__PreparationPlanClient<$Result.GetResult<Prisma.$PreparationPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PreparationPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreparationPlanFindFirstOrThrowArgs} args - Arguments to find a PreparationPlan
     * @example
     * // Get one PreparationPlan
     * const preparationPlan = await prisma.preparationPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PreparationPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, PreparationPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__PreparationPlanClient<$Result.GetResult<Prisma.$PreparationPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PreparationPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreparationPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PreparationPlans
     * const preparationPlans = await prisma.preparationPlan.findMany()
     * 
     * // Get first 10 PreparationPlans
     * const preparationPlans = await prisma.preparationPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const preparationPlanWithIdOnly = await prisma.preparationPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PreparationPlanFindManyArgs>(args?: SelectSubset<T, PreparationPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreparationPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PreparationPlan.
     * @param {PreparationPlanCreateArgs} args - Arguments to create a PreparationPlan.
     * @example
     * // Create one PreparationPlan
     * const PreparationPlan = await prisma.preparationPlan.create({
     *   data: {
     *     // ... data to create a PreparationPlan
     *   }
     * })
     * 
     */
    create<T extends PreparationPlanCreateArgs>(args: SelectSubset<T, PreparationPlanCreateArgs<ExtArgs>>): Prisma__PreparationPlanClient<$Result.GetResult<Prisma.$PreparationPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PreparationPlans.
     * @param {PreparationPlanCreateManyArgs} args - Arguments to create many PreparationPlans.
     * @example
     * // Create many PreparationPlans
     * const preparationPlan = await prisma.preparationPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PreparationPlanCreateManyArgs>(args?: SelectSubset<T, PreparationPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PreparationPlans and returns the data saved in the database.
     * @param {PreparationPlanCreateManyAndReturnArgs} args - Arguments to create many PreparationPlans.
     * @example
     * // Create many PreparationPlans
     * const preparationPlan = await prisma.preparationPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PreparationPlans and only return the `id`
     * const preparationPlanWithIdOnly = await prisma.preparationPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PreparationPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, PreparationPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreparationPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PreparationPlan.
     * @param {PreparationPlanDeleteArgs} args - Arguments to delete one PreparationPlan.
     * @example
     * // Delete one PreparationPlan
     * const PreparationPlan = await prisma.preparationPlan.delete({
     *   where: {
     *     // ... filter to delete one PreparationPlan
     *   }
     * })
     * 
     */
    delete<T extends PreparationPlanDeleteArgs>(args: SelectSubset<T, PreparationPlanDeleteArgs<ExtArgs>>): Prisma__PreparationPlanClient<$Result.GetResult<Prisma.$PreparationPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PreparationPlan.
     * @param {PreparationPlanUpdateArgs} args - Arguments to update one PreparationPlan.
     * @example
     * // Update one PreparationPlan
     * const preparationPlan = await prisma.preparationPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PreparationPlanUpdateArgs>(args: SelectSubset<T, PreparationPlanUpdateArgs<ExtArgs>>): Prisma__PreparationPlanClient<$Result.GetResult<Prisma.$PreparationPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PreparationPlans.
     * @param {PreparationPlanDeleteManyArgs} args - Arguments to filter PreparationPlans to delete.
     * @example
     * // Delete a few PreparationPlans
     * const { count } = await prisma.preparationPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PreparationPlanDeleteManyArgs>(args?: SelectSubset<T, PreparationPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PreparationPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreparationPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PreparationPlans
     * const preparationPlan = await prisma.preparationPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PreparationPlanUpdateManyArgs>(args: SelectSubset<T, PreparationPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PreparationPlans and returns the data updated in the database.
     * @param {PreparationPlanUpdateManyAndReturnArgs} args - Arguments to update many PreparationPlans.
     * @example
     * // Update many PreparationPlans
     * const preparationPlan = await prisma.preparationPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PreparationPlans and only return the `id`
     * const preparationPlanWithIdOnly = await prisma.preparationPlan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PreparationPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, PreparationPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreparationPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PreparationPlan.
     * @param {PreparationPlanUpsertArgs} args - Arguments to update or create a PreparationPlan.
     * @example
     * // Update or create a PreparationPlan
     * const preparationPlan = await prisma.preparationPlan.upsert({
     *   create: {
     *     // ... data to create a PreparationPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PreparationPlan we want to update
     *   }
     * })
     */
    upsert<T extends PreparationPlanUpsertArgs>(args: SelectSubset<T, PreparationPlanUpsertArgs<ExtArgs>>): Prisma__PreparationPlanClient<$Result.GetResult<Prisma.$PreparationPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PreparationPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreparationPlanCountArgs} args - Arguments to filter PreparationPlans to count.
     * @example
     * // Count the number of PreparationPlans
     * const count = await prisma.preparationPlan.count({
     *   where: {
     *     // ... the filter for the PreparationPlans we want to count
     *   }
     * })
    **/
    count<T extends PreparationPlanCountArgs>(
      args?: Subset<T, PreparationPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PreparationPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PreparationPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreparationPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PreparationPlanAggregateArgs>(args: Subset<T, PreparationPlanAggregateArgs>): Prisma.PrismaPromise<GetPreparationPlanAggregateType<T>>

    /**
     * Group by PreparationPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreparationPlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PreparationPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PreparationPlanGroupByArgs['orderBy'] }
        : { orderBy?: PreparationPlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PreparationPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPreparationPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PreparationPlan model
   */
  readonly fields: PreparationPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PreparationPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PreparationPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    review<T extends ReviewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReviewDefaultArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PreparationPlan model
   */
  interface PreparationPlanFieldRefs {
    readonly id: FieldRef<"PreparationPlan", 'Int'>
    readonly reviewId: FieldRef<"PreparationPlan", 'String'>
    readonly day: FieldRef<"PreparationPlan", 'Int'>
    readonly focus: FieldRef<"PreparationPlan", 'String'>
    readonly tasks: FieldRef<"PreparationPlan", 'String[]'>
    readonly createdAt: FieldRef<"PreparationPlan", 'DateTime'>
    readonly updatedAt: FieldRef<"PreparationPlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PreparationPlan findUnique
   */
  export type PreparationPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreparationPlan
     */
    select?: PreparationPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreparationPlan
     */
    omit?: PreparationPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreparationPlanInclude<ExtArgs> | null
    /**
     * Filter, which PreparationPlan to fetch.
     */
    where: PreparationPlanWhereUniqueInput
  }

  /**
   * PreparationPlan findUniqueOrThrow
   */
  export type PreparationPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreparationPlan
     */
    select?: PreparationPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreparationPlan
     */
    omit?: PreparationPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreparationPlanInclude<ExtArgs> | null
    /**
     * Filter, which PreparationPlan to fetch.
     */
    where: PreparationPlanWhereUniqueInput
  }

  /**
   * PreparationPlan findFirst
   */
  export type PreparationPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreparationPlan
     */
    select?: PreparationPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreparationPlan
     */
    omit?: PreparationPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreparationPlanInclude<ExtArgs> | null
    /**
     * Filter, which PreparationPlan to fetch.
     */
    where?: PreparationPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PreparationPlans to fetch.
     */
    orderBy?: PreparationPlanOrderByWithRelationInput | PreparationPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PreparationPlans.
     */
    cursor?: PreparationPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PreparationPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PreparationPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PreparationPlans.
     */
    distinct?: PreparationPlanScalarFieldEnum | PreparationPlanScalarFieldEnum[]
  }

  /**
   * PreparationPlan findFirstOrThrow
   */
  export type PreparationPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreparationPlan
     */
    select?: PreparationPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreparationPlan
     */
    omit?: PreparationPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreparationPlanInclude<ExtArgs> | null
    /**
     * Filter, which PreparationPlan to fetch.
     */
    where?: PreparationPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PreparationPlans to fetch.
     */
    orderBy?: PreparationPlanOrderByWithRelationInput | PreparationPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PreparationPlans.
     */
    cursor?: PreparationPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PreparationPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PreparationPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PreparationPlans.
     */
    distinct?: PreparationPlanScalarFieldEnum | PreparationPlanScalarFieldEnum[]
  }

  /**
   * PreparationPlan findMany
   */
  export type PreparationPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreparationPlan
     */
    select?: PreparationPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreparationPlan
     */
    omit?: PreparationPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreparationPlanInclude<ExtArgs> | null
    /**
     * Filter, which PreparationPlans to fetch.
     */
    where?: PreparationPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PreparationPlans to fetch.
     */
    orderBy?: PreparationPlanOrderByWithRelationInput | PreparationPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PreparationPlans.
     */
    cursor?: PreparationPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PreparationPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PreparationPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PreparationPlans.
     */
    distinct?: PreparationPlanScalarFieldEnum | PreparationPlanScalarFieldEnum[]
  }

  /**
   * PreparationPlan create
   */
  export type PreparationPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreparationPlan
     */
    select?: PreparationPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreparationPlan
     */
    omit?: PreparationPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreparationPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a PreparationPlan.
     */
    data: XOR<PreparationPlanCreateInput, PreparationPlanUncheckedCreateInput>
  }

  /**
   * PreparationPlan createMany
   */
  export type PreparationPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PreparationPlans.
     */
    data: PreparationPlanCreateManyInput | PreparationPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PreparationPlan createManyAndReturn
   */
  export type PreparationPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreparationPlan
     */
    select?: PreparationPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PreparationPlan
     */
    omit?: PreparationPlanOmit<ExtArgs> | null
    /**
     * The data used to create many PreparationPlans.
     */
    data: PreparationPlanCreateManyInput | PreparationPlanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreparationPlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PreparationPlan update
   */
  export type PreparationPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreparationPlan
     */
    select?: PreparationPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreparationPlan
     */
    omit?: PreparationPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreparationPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a PreparationPlan.
     */
    data: XOR<PreparationPlanUpdateInput, PreparationPlanUncheckedUpdateInput>
    /**
     * Choose, which PreparationPlan to update.
     */
    where: PreparationPlanWhereUniqueInput
  }

  /**
   * PreparationPlan updateMany
   */
  export type PreparationPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PreparationPlans.
     */
    data: XOR<PreparationPlanUpdateManyMutationInput, PreparationPlanUncheckedUpdateManyInput>
    /**
     * Filter which PreparationPlans to update
     */
    where?: PreparationPlanWhereInput
    /**
     * Limit how many PreparationPlans to update.
     */
    limit?: number
  }

  /**
   * PreparationPlan updateManyAndReturn
   */
  export type PreparationPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreparationPlan
     */
    select?: PreparationPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PreparationPlan
     */
    omit?: PreparationPlanOmit<ExtArgs> | null
    /**
     * The data used to update PreparationPlans.
     */
    data: XOR<PreparationPlanUpdateManyMutationInput, PreparationPlanUncheckedUpdateManyInput>
    /**
     * Filter which PreparationPlans to update
     */
    where?: PreparationPlanWhereInput
    /**
     * Limit how many PreparationPlans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreparationPlanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PreparationPlan upsert
   */
  export type PreparationPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreparationPlan
     */
    select?: PreparationPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreparationPlan
     */
    omit?: PreparationPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreparationPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the PreparationPlan to update in case it exists.
     */
    where: PreparationPlanWhereUniqueInput
    /**
     * In case the PreparationPlan found by the `where` argument doesn't exist, create a new PreparationPlan with this data.
     */
    create: XOR<PreparationPlanCreateInput, PreparationPlanUncheckedCreateInput>
    /**
     * In case the PreparationPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PreparationPlanUpdateInput, PreparationPlanUncheckedUpdateInput>
  }

  /**
   * PreparationPlan delete
   */
  export type PreparationPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreparationPlan
     */
    select?: PreparationPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreparationPlan
     */
    omit?: PreparationPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreparationPlanInclude<ExtArgs> | null
    /**
     * Filter which PreparationPlan to delete.
     */
    where: PreparationPlanWhereUniqueInput
  }

  /**
   * PreparationPlan deleteMany
   */
  export type PreparationPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PreparationPlans to delete
     */
    where?: PreparationPlanWhereInput
    /**
     * Limit how many PreparationPlans to delete.
     */
    limit?: number
  }

  /**
   * PreparationPlan without action
   */
  export type PreparationPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreparationPlan
     */
    select?: PreparationPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreparationPlan
     */
    omit?: PreparationPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreparationPlanInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    userName: 'userName',
    email: 'email',
    password: 'password',
    refreshToken: 'refreshToken',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    resume: 'resume',
    selfDescription: 'selfDescription',
    jobDescription: 'jobDescription',
    title: 'title',
    matchScore: 'matchScore',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const TechnicalQuestionScalarFieldEnum: {
    id: 'id',
    reviewId: 'reviewId',
    question: 'question',
    intention: 'intention',
    answer: 'answer',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TechnicalQuestionScalarFieldEnum = (typeof TechnicalQuestionScalarFieldEnum)[keyof typeof TechnicalQuestionScalarFieldEnum]


  export const BehavioralQuestionScalarFieldEnum: {
    id: 'id',
    reviewId: 'reviewId',
    question: 'question',
    intention: 'intention',
    answer: 'answer',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BehavioralQuestionScalarFieldEnum = (typeof BehavioralQuestionScalarFieldEnum)[keyof typeof BehavioralQuestionScalarFieldEnum]


  export const SkillGapScalarFieldEnum: {
    id: 'id',
    reviewId: 'reviewId',
    skill: 'skill',
    severity: 'severity',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SkillGapScalarFieldEnum = (typeof SkillGapScalarFieldEnum)[keyof typeof SkillGapScalarFieldEnum]


  export const PreparationPlanScalarFieldEnum: {
    id: 'id',
    reviewId: 'reviewId',
    day: 'day',
    focus: 'focus',
    tasks: 'tasks',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PreparationPlanScalarFieldEnum = (typeof PreparationPlanScalarFieldEnum)[keyof typeof PreparationPlanScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Severity'
   */
  export type EnumSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Severity'>
    


  /**
   * Reference to a field of type 'Severity[]'
   */
  export type ListEnumSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Severity[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    userName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    refreshToken?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    reviews?: ReviewListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    refreshToken?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    reviews?: ReviewListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    userName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    refreshToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    userId?: StringFilter<"Review"> | string
    resume?: StringFilter<"Review"> | string
    selfDescription?: StringNullableFilter<"Review"> | string | null
    jobDescription?: StringFilter<"Review"> | string
    title?: StringFilter<"Review"> | string
    matchScore?: FloatFilter<"Review"> | number
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    technicalQuestions?: TechnicalQuestionListRelationFilter
    behavioralQuestions?: BehavioralQuestionListRelationFilter
    skillGaps?: SkillGapListRelationFilter
    preparationPlans?: PreparationPlanListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    resume?: SortOrder
    selfDescription?: SortOrderInput | SortOrder
    jobDescription?: SortOrder
    title?: SortOrder
    matchScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    technicalQuestions?: TechnicalQuestionOrderByRelationAggregateInput
    behavioralQuestions?: BehavioralQuestionOrderByRelationAggregateInput
    skillGaps?: SkillGapOrderByRelationAggregateInput
    preparationPlans?: PreparationPlanOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    userId?: StringFilter<"Review"> | string
    resume?: StringFilter<"Review"> | string
    selfDescription?: StringNullableFilter<"Review"> | string | null
    jobDescription?: StringFilter<"Review"> | string
    title?: StringFilter<"Review"> | string
    matchScore?: FloatFilter<"Review"> | number
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    technicalQuestions?: TechnicalQuestionListRelationFilter
    behavioralQuestions?: BehavioralQuestionListRelationFilter
    skillGaps?: SkillGapListRelationFilter
    preparationPlans?: PreparationPlanListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    resume?: SortOrder
    selfDescription?: SortOrderInput | SortOrder
    jobDescription?: SortOrder
    title?: SortOrder
    matchScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    userId?: StringWithAggregatesFilter<"Review"> | string
    resume?: StringWithAggregatesFilter<"Review"> | string
    selfDescription?: StringNullableWithAggregatesFilter<"Review"> | string | null
    jobDescription?: StringWithAggregatesFilter<"Review"> | string
    title?: StringWithAggregatesFilter<"Review"> | string
    matchScore?: FloatWithAggregatesFilter<"Review"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type TechnicalQuestionWhereInput = {
    AND?: TechnicalQuestionWhereInput | TechnicalQuestionWhereInput[]
    OR?: TechnicalQuestionWhereInput[]
    NOT?: TechnicalQuestionWhereInput | TechnicalQuestionWhereInput[]
    id?: IntFilter<"TechnicalQuestion"> | number
    reviewId?: StringFilter<"TechnicalQuestion"> | string
    question?: StringFilter<"TechnicalQuestion"> | string
    intention?: StringFilter<"TechnicalQuestion"> | string
    answer?: StringFilter<"TechnicalQuestion"> | string
    createdAt?: DateTimeFilter<"TechnicalQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"TechnicalQuestion"> | Date | string
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
  }

  export type TechnicalQuestionOrderByWithRelationInput = {
    id?: SortOrder
    reviewId?: SortOrder
    question?: SortOrder
    intention?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    review?: ReviewOrderByWithRelationInput
  }

  export type TechnicalQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TechnicalQuestionWhereInput | TechnicalQuestionWhereInput[]
    OR?: TechnicalQuestionWhereInput[]
    NOT?: TechnicalQuestionWhereInput | TechnicalQuestionWhereInput[]
    reviewId?: StringFilter<"TechnicalQuestion"> | string
    question?: StringFilter<"TechnicalQuestion"> | string
    intention?: StringFilter<"TechnicalQuestion"> | string
    answer?: StringFilter<"TechnicalQuestion"> | string
    createdAt?: DateTimeFilter<"TechnicalQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"TechnicalQuestion"> | Date | string
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
  }, "id">

  export type TechnicalQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    reviewId?: SortOrder
    question?: SortOrder
    intention?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TechnicalQuestionCountOrderByAggregateInput
    _avg?: TechnicalQuestionAvgOrderByAggregateInput
    _max?: TechnicalQuestionMaxOrderByAggregateInput
    _min?: TechnicalQuestionMinOrderByAggregateInput
    _sum?: TechnicalQuestionSumOrderByAggregateInput
  }

  export type TechnicalQuestionScalarWhereWithAggregatesInput = {
    AND?: TechnicalQuestionScalarWhereWithAggregatesInput | TechnicalQuestionScalarWhereWithAggregatesInput[]
    OR?: TechnicalQuestionScalarWhereWithAggregatesInput[]
    NOT?: TechnicalQuestionScalarWhereWithAggregatesInput | TechnicalQuestionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TechnicalQuestion"> | number
    reviewId?: StringWithAggregatesFilter<"TechnicalQuestion"> | string
    question?: StringWithAggregatesFilter<"TechnicalQuestion"> | string
    intention?: StringWithAggregatesFilter<"TechnicalQuestion"> | string
    answer?: StringWithAggregatesFilter<"TechnicalQuestion"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TechnicalQuestion"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TechnicalQuestion"> | Date | string
  }

  export type BehavioralQuestionWhereInput = {
    AND?: BehavioralQuestionWhereInput | BehavioralQuestionWhereInput[]
    OR?: BehavioralQuestionWhereInput[]
    NOT?: BehavioralQuestionWhereInput | BehavioralQuestionWhereInput[]
    id?: IntFilter<"BehavioralQuestion"> | number
    reviewId?: StringFilter<"BehavioralQuestion"> | string
    question?: StringFilter<"BehavioralQuestion"> | string
    intention?: StringFilter<"BehavioralQuestion"> | string
    answer?: StringFilter<"BehavioralQuestion"> | string
    createdAt?: DateTimeFilter<"BehavioralQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"BehavioralQuestion"> | Date | string
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
  }

  export type BehavioralQuestionOrderByWithRelationInput = {
    id?: SortOrder
    reviewId?: SortOrder
    question?: SortOrder
    intention?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    review?: ReviewOrderByWithRelationInput
  }

  export type BehavioralQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BehavioralQuestionWhereInput | BehavioralQuestionWhereInput[]
    OR?: BehavioralQuestionWhereInput[]
    NOT?: BehavioralQuestionWhereInput | BehavioralQuestionWhereInput[]
    reviewId?: StringFilter<"BehavioralQuestion"> | string
    question?: StringFilter<"BehavioralQuestion"> | string
    intention?: StringFilter<"BehavioralQuestion"> | string
    answer?: StringFilter<"BehavioralQuestion"> | string
    createdAt?: DateTimeFilter<"BehavioralQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"BehavioralQuestion"> | Date | string
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
  }, "id">

  export type BehavioralQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    reviewId?: SortOrder
    question?: SortOrder
    intention?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BehavioralQuestionCountOrderByAggregateInput
    _avg?: BehavioralQuestionAvgOrderByAggregateInput
    _max?: BehavioralQuestionMaxOrderByAggregateInput
    _min?: BehavioralQuestionMinOrderByAggregateInput
    _sum?: BehavioralQuestionSumOrderByAggregateInput
  }

  export type BehavioralQuestionScalarWhereWithAggregatesInput = {
    AND?: BehavioralQuestionScalarWhereWithAggregatesInput | BehavioralQuestionScalarWhereWithAggregatesInput[]
    OR?: BehavioralQuestionScalarWhereWithAggregatesInput[]
    NOT?: BehavioralQuestionScalarWhereWithAggregatesInput | BehavioralQuestionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BehavioralQuestion"> | number
    reviewId?: StringWithAggregatesFilter<"BehavioralQuestion"> | string
    question?: StringWithAggregatesFilter<"BehavioralQuestion"> | string
    intention?: StringWithAggregatesFilter<"BehavioralQuestion"> | string
    answer?: StringWithAggregatesFilter<"BehavioralQuestion"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BehavioralQuestion"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BehavioralQuestion"> | Date | string
  }

  export type SkillGapWhereInput = {
    AND?: SkillGapWhereInput | SkillGapWhereInput[]
    OR?: SkillGapWhereInput[]
    NOT?: SkillGapWhereInput | SkillGapWhereInput[]
    id?: IntFilter<"SkillGap"> | number
    reviewId?: StringFilter<"SkillGap"> | string
    skill?: StringFilter<"SkillGap"> | string
    severity?: EnumSeverityFilter<"SkillGap"> | $Enums.Severity
    createdAt?: DateTimeFilter<"SkillGap"> | Date | string
    updatedAt?: DateTimeFilter<"SkillGap"> | Date | string
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
  }

  export type SkillGapOrderByWithRelationInput = {
    id?: SortOrder
    reviewId?: SortOrder
    skill?: SortOrder
    severity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    review?: ReviewOrderByWithRelationInput
  }

  export type SkillGapWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SkillGapWhereInput | SkillGapWhereInput[]
    OR?: SkillGapWhereInput[]
    NOT?: SkillGapWhereInput | SkillGapWhereInput[]
    reviewId?: StringFilter<"SkillGap"> | string
    skill?: StringFilter<"SkillGap"> | string
    severity?: EnumSeverityFilter<"SkillGap"> | $Enums.Severity
    createdAt?: DateTimeFilter<"SkillGap"> | Date | string
    updatedAt?: DateTimeFilter<"SkillGap"> | Date | string
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
  }, "id">

  export type SkillGapOrderByWithAggregationInput = {
    id?: SortOrder
    reviewId?: SortOrder
    skill?: SortOrder
    severity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SkillGapCountOrderByAggregateInput
    _avg?: SkillGapAvgOrderByAggregateInput
    _max?: SkillGapMaxOrderByAggregateInput
    _min?: SkillGapMinOrderByAggregateInput
    _sum?: SkillGapSumOrderByAggregateInput
  }

  export type SkillGapScalarWhereWithAggregatesInput = {
    AND?: SkillGapScalarWhereWithAggregatesInput | SkillGapScalarWhereWithAggregatesInput[]
    OR?: SkillGapScalarWhereWithAggregatesInput[]
    NOT?: SkillGapScalarWhereWithAggregatesInput | SkillGapScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SkillGap"> | number
    reviewId?: StringWithAggregatesFilter<"SkillGap"> | string
    skill?: StringWithAggregatesFilter<"SkillGap"> | string
    severity?: EnumSeverityWithAggregatesFilter<"SkillGap"> | $Enums.Severity
    createdAt?: DateTimeWithAggregatesFilter<"SkillGap"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SkillGap"> | Date | string
  }

  export type PreparationPlanWhereInput = {
    AND?: PreparationPlanWhereInput | PreparationPlanWhereInput[]
    OR?: PreparationPlanWhereInput[]
    NOT?: PreparationPlanWhereInput | PreparationPlanWhereInput[]
    id?: IntFilter<"PreparationPlan"> | number
    reviewId?: StringFilter<"PreparationPlan"> | string
    day?: IntFilter<"PreparationPlan"> | number
    focus?: StringFilter<"PreparationPlan"> | string
    tasks?: StringNullableListFilter<"PreparationPlan">
    createdAt?: DateTimeFilter<"PreparationPlan"> | Date | string
    updatedAt?: DateTimeFilter<"PreparationPlan"> | Date | string
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
  }

  export type PreparationPlanOrderByWithRelationInput = {
    id?: SortOrder
    reviewId?: SortOrder
    day?: SortOrder
    focus?: SortOrder
    tasks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    review?: ReviewOrderByWithRelationInput
  }

  export type PreparationPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PreparationPlanWhereInput | PreparationPlanWhereInput[]
    OR?: PreparationPlanWhereInput[]
    NOT?: PreparationPlanWhereInput | PreparationPlanWhereInput[]
    reviewId?: StringFilter<"PreparationPlan"> | string
    day?: IntFilter<"PreparationPlan"> | number
    focus?: StringFilter<"PreparationPlan"> | string
    tasks?: StringNullableListFilter<"PreparationPlan">
    createdAt?: DateTimeFilter<"PreparationPlan"> | Date | string
    updatedAt?: DateTimeFilter<"PreparationPlan"> | Date | string
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
  }, "id">

  export type PreparationPlanOrderByWithAggregationInput = {
    id?: SortOrder
    reviewId?: SortOrder
    day?: SortOrder
    focus?: SortOrder
    tasks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PreparationPlanCountOrderByAggregateInput
    _avg?: PreparationPlanAvgOrderByAggregateInput
    _max?: PreparationPlanMaxOrderByAggregateInput
    _min?: PreparationPlanMinOrderByAggregateInput
    _sum?: PreparationPlanSumOrderByAggregateInput
  }

  export type PreparationPlanScalarWhereWithAggregatesInput = {
    AND?: PreparationPlanScalarWhereWithAggregatesInput | PreparationPlanScalarWhereWithAggregatesInput[]
    OR?: PreparationPlanScalarWhereWithAggregatesInput[]
    NOT?: PreparationPlanScalarWhereWithAggregatesInput | PreparationPlanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PreparationPlan"> | number
    reviewId?: StringWithAggregatesFilter<"PreparationPlan"> | string
    day?: IntWithAggregatesFilter<"PreparationPlan"> | number
    focus?: StringWithAggregatesFilter<"PreparationPlan"> | string
    tasks?: StringNullableListFilter<"PreparationPlan">
    createdAt?: DateTimeWithAggregatesFilter<"PreparationPlan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PreparationPlan"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    userName: string
    email: string
    password: string
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    userName: string
    email: string
    password: string
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    userName: string
    email: string
    password: string
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    id?: string
    resume: string
    selfDescription?: string | null
    jobDescription: string
    title?: string
    matchScore: number
    createdAt?: Date | string
    updatedAt?: Date | string
    technicalQuestions?: TechnicalQuestionCreateNestedManyWithoutReviewInput
    behavioralQuestions?: BehavioralQuestionCreateNestedManyWithoutReviewInput
    skillGaps?: SkillGapCreateNestedManyWithoutReviewInput
    preparationPlans?: PreparationPlanCreateNestedManyWithoutReviewInput
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    userId: string
    resume: string
    selfDescription?: string | null
    jobDescription: string
    title?: string
    matchScore: number
    createdAt?: Date | string
    updatedAt?: Date | string
    technicalQuestions?: TechnicalQuestionUncheckedCreateNestedManyWithoutReviewInput
    behavioralQuestions?: BehavioralQuestionUncheckedCreateNestedManyWithoutReviewInput
    skillGaps?: SkillGapUncheckedCreateNestedManyWithoutReviewInput
    preparationPlans?: PreparationPlanUncheckedCreateNestedManyWithoutReviewInput
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resume?: StringFieldUpdateOperationsInput | string
    selfDescription?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    matchScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technicalQuestions?: TechnicalQuestionUpdateManyWithoutReviewNestedInput
    behavioralQuestions?: BehavioralQuestionUpdateManyWithoutReviewNestedInput
    skillGaps?: SkillGapUpdateManyWithoutReviewNestedInput
    preparationPlans?: PreparationPlanUpdateManyWithoutReviewNestedInput
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    resume?: StringFieldUpdateOperationsInput | string
    selfDescription?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    matchScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technicalQuestions?: TechnicalQuestionUncheckedUpdateManyWithoutReviewNestedInput
    behavioralQuestions?: BehavioralQuestionUncheckedUpdateManyWithoutReviewNestedInput
    skillGaps?: SkillGapUncheckedUpdateManyWithoutReviewNestedInput
    preparationPlans?: PreparationPlanUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type ReviewCreateManyInput = {
    id?: string
    userId: string
    resume: string
    selfDescription?: string | null
    jobDescription: string
    title?: string
    matchScore: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    resume?: StringFieldUpdateOperationsInput | string
    selfDescription?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    matchScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    resume?: StringFieldUpdateOperationsInput | string
    selfDescription?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    matchScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TechnicalQuestionCreateInput = {
    question: string
    intention: string
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
    review: ReviewCreateNestedOneWithoutTechnicalQuestionsInput
  }

  export type TechnicalQuestionUncheckedCreateInput = {
    id?: number
    reviewId: string
    question: string
    intention: string
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TechnicalQuestionUpdateInput = {
    question?: StringFieldUpdateOperationsInput | string
    intention?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUpdateOneRequiredWithoutTechnicalQuestionsNestedInput
  }

  export type TechnicalQuestionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    intention?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TechnicalQuestionCreateManyInput = {
    id?: number
    reviewId: string
    question: string
    intention: string
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TechnicalQuestionUpdateManyMutationInput = {
    question?: StringFieldUpdateOperationsInput | string
    intention?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TechnicalQuestionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    intention?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BehavioralQuestionCreateInput = {
    question: string
    intention: string
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
    review: ReviewCreateNestedOneWithoutBehavioralQuestionsInput
  }

  export type BehavioralQuestionUncheckedCreateInput = {
    id?: number
    reviewId: string
    question: string
    intention: string
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BehavioralQuestionUpdateInput = {
    question?: StringFieldUpdateOperationsInput | string
    intention?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUpdateOneRequiredWithoutBehavioralQuestionsNestedInput
  }

  export type BehavioralQuestionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    intention?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BehavioralQuestionCreateManyInput = {
    id?: number
    reviewId: string
    question: string
    intention: string
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BehavioralQuestionUpdateManyMutationInput = {
    question?: StringFieldUpdateOperationsInput | string
    intention?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BehavioralQuestionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    intention?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillGapCreateInput = {
    skill: string
    severity: $Enums.Severity
    createdAt?: Date | string
    updatedAt?: Date | string
    review: ReviewCreateNestedOneWithoutSkillGapsInput
  }

  export type SkillGapUncheckedCreateInput = {
    id?: number
    reviewId: string
    skill: string
    severity: $Enums.Severity
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillGapUpdateInput = {
    skill?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUpdateOneRequiredWithoutSkillGapsNestedInput
  }

  export type SkillGapUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewId?: StringFieldUpdateOperationsInput | string
    skill?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillGapCreateManyInput = {
    id?: number
    reviewId: string
    skill: string
    severity: $Enums.Severity
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillGapUpdateManyMutationInput = {
    skill?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillGapUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewId?: StringFieldUpdateOperationsInput | string
    skill?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PreparationPlanCreateInput = {
    day: number
    focus: string
    tasks?: PreparationPlanCreatetasksInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    review: ReviewCreateNestedOneWithoutPreparationPlansInput
  }

  export type PreparationPlanUncheckedCreateInput = {
    id?: number
    reviewId: string
    day: number
    focus: string
    tasks?: PreparationPlanCreatetasksInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PreparationPlanUpdateInput = {
    day?: IntFieldUpdateOperationsInput | number
    focus?: StringFieldUpdateOperationsInput | string
    tasks?: PreparationPlanUpdatetasksInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUpdateOneRequiredWithoutPreparationPlansNestedInput
  }

  export type PreparationPlanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewId?: StringFieldUpdateOperationsInput | string
    day?: IntFieldUpdateOperationsInput | number
    focus?: StringFieldUpdateOperationsInput | string
    tasks?: PreparationPlanUpdatetasksInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PreparationPlanCreateManyInput = {
    id?: number
    reviewId: string
    day: number
    focus: string
    tasks?: PreparationPlanCreatetasksInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PreparationPlanUpdateManyMutationInput = {
    day?: IntFieldUpdateOperationsInput | number
    focus?: StringFieldUpdateOperationsInput | string
    tasks?: PreparationPlanUpdatetasksInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PreparationPlanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewId?: StringFieldUpdateOperationsInput | string
    day?: IntFieldUpdateOperationsInput | number
    focus?: StringFieldUpdateOperationsInput | string
    tasks?: PreparationPlanUpdatetasksInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type TechnicalQuestionListRelationFilter = {
    every?: TechnicalQuestionWhereInput
    some?: TechnicalQuestionWhereInput
    none?: TechnicalQuestionWhereInput
  }

  export type BehavioralQuestionListRelationFilter = {
    every?: BehavioralQuestionWhereInput
    some?: BehavioralQuestionWhereInput
    none?: BehavioralQuestionWhereInput
  }

  export type SkillGapListRelationFilter = {
    every?: SkillGapWhereInput
    some?: SkillGapWhereInput
    none?: SkillGapWhereInput
  }

  export type PreparationPlanListRelationFilter = {
    every?: PreparationPlanWhereInput
    some?: PreparationPlanWhereInput
    none?: PreparationPlanWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TechnicalQuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BehavioralQuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SkillGapOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PreparationPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    resume?: SortOrder
    selfDescription?: SortOrder
    jobDescription?: SortOrder
    title?: SortOrder
    matchScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    matchScore?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    resume?: SortOrder
    selfDescription?: SortOrder
    jobDescription?: SortOrder
    title?: SortOrder
    matchScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    resume?: SortOrder
    selfDescription?: SortOrder
    jobDescription?: SortOrder
    title?: SortOrder
    matchScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    matchScore?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ReviewScalarRelationFilter = {
    is?: ReviewWhereInput
    isNot?: ReviewWhereInput
  }

  export type TechnicalQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
    question?: SortOrder
    intention?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TechnicalQuestionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TechnicalQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
    question?: SortOrder
    intention?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TechnicalQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
    question?: SortOrder
    intention?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TechnicalQuestionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BehavioralQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
    question?: SortOrder
    intention?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BehavioralQuestionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BehavioralQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
    question?: SortOrder
    intention?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BehavioralQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
    question?: SortOrder
    intention?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BehavioralQuestionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityFilter<$PrismaModel> | $Enums.Severity
  }

  export type SkillGapCountOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
    skill?: SortOrder
    severity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillGapAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SkillGapMaxOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
    skill?: SortOrder
    severity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillGapMinOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
    skill?: SortOrder
    severity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillGapSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityWithAggregatesFilter<$PrismaModel> | $Enums.Severity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeverityFilter<$PrismaModel>
    _max?: NestedEnumSeverityFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type PreparationPlanCountOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
    day?: SortOrder
    focus?: SortOrder
    tasks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PreparationPlanAvgOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
  }

  export type PreparationPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
    day?: SortOrder
    focus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PreparationPlanMinOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
    day?: SortOrder
    focus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PreparationPlanSumOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type TechnicalQuestionCreateNestedManyWithoutReviewInput = {
    create?: XOR<TechnicalQuestionCreateWithoutReviewInput, TechnicalQuestionUncheckedCreateWithoutReviewInput> | TechnicalQuestionCreateWithoutReviewInput[] | TechnicalQuestionUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: TechnicalQuestionCreateOrConnectWithoutReviewInput | TechnicalQuestionCreateOrConnectWithoutReviewInput[]
    createMany?: TechnicalQuestionCreateManyReviewInputEnvelope
    connect?: TechnicalQuestionWhereUniqueInput | TechnicalQuestionWhereUniqueInput[]
  }

  export type BehavioralQuestionCreateNestedManyWithoutReviewInput = {
    create?: XOR<BehavioralQuestionCreateWithoutReviewInput, BehavioralQuestionUncheckedCreateWithoutReviewInput> | BehavioralQuestionCreateWithoutReviewInput[] | BehavioralQuestionUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: BehavioralQuestionCreateOrConnectWithoutReviewInput | BehavioralQuestionCreateOrConnectWithoutReviewInput[]
    createMany?: BehavioralQuestionCreateManyReviewInputEnvelope
    connect?: BehavioralQuestionWhereUniqueInput | BehavioralQuestionWhereUniqueInput[]
  }

  export type SkillGapCreateNestedManyWithoutReviewInput = {
    create?: XOR<SkillGapCreateWithoutReviewInput, SkillGapUncheckedCreateWithoutReviewInput> | SkillGapCreateWithoutReviewInput[] | SkillGapUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: SkillGapCreateOrConnectWithoutReviewInput | SkillGapCreateOrConnectWithoutReviewInput[]
    createMany?: SkillGapCreateManyReviewInputEnvelope
    connect?: SkillGapWhereUniqueInput | SkillGapWhereUniqueInput[]
  }

  export type PreparationPlanCreateNestedManyWithoutReviewInput = {
    create?: XOR<PreparationPlanCreateWithoutReviewInput, PreparationPlanUncheckedCreateWithoutReviewInput> | PreparationPlanCreateWithoutReviewInput[] | PreparationPlanUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: PreparationPlanCreateOrConnectWithoutReviewInput | PreparationPlanCreateOrConnectWithoutReviewInput[]
    createMany?: PreparationPlanCreateManyReviewInputEnvelope
    connect?: PreparationPlanWhereUniqueInput | PreparationPlanWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type TechnicalQuestionUncheckedCreateNestedManyWithoutReviewInput = {
    create?: XOR<TechnicalQuestionCreateWithoutReviewInput, TechnicalQuestionUncheckedCreateWithoutReviewInput> | TechnicalQuestionCreateWithoutReviewInput[] | TechnicalQuestionUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: TechnicalQuestionCreateOrConnectWithoutReviewInput | TechnicalQuestionCreateOrConnectWithoutReviewInput[]
    createMany?: TechnicalQuestionCreateManyReviewInputEnvelope
    connect?: TechnicalQuestionWhereUniqueInput | TechnicalQuestionWhereUniqueInput[]
  }

  export type BehavioralQuestionUncheckedCreateNestedManyWithoutReviewInput = {
    create?: XOR<BehavioralQuestionCreateWithoutReviewInput, BehavioralQuestionUncheckedCreateWithoutReviewInput> | BehavioralQuestionCreateWithoutReviewInput[] | BehavioralQuestionUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: BehavioralQuestionCreateOrConnectWithoutReviewInput | BehavioralQuestionCreateOrConnectWithoutReviewInput[]
    createMany?: BehavioralQuestionCreateManyReviewInputEnvelope
    connect?: BehavioralQuestionWhereUniqueInput | BehavioralQuestionWhereUniqueInput[]
  }

  export type SkillGapUncheckedCreateNestedManyWithoutReviewInput = {
    create?: XOR<SkillGapCreateWithoutReviewInput, SkillGapUncheckedCreateWithoutReviewInput> | SkillGapCreateWithoutReviewInput[] | SkillGapUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: SkillGapCreateOrConnectWithoutReviewInput | SkillGapCreateOrConnectWithoutReviewInput[]
    createMany?: SkillGapCreateManyReviewInputEnvelope
    connect?: SkillGapWhereUniqueInput | SkillGapWhereUniqueInput[]
  }

  export type PreparationPlanUncheckedCreateNestedManyWithoutReviewInput = {
    create?: XOR<PreparationPlanCreateWithoutReviewInput, PreparationPlanUncheckedCreateWithoutReviewInput> | PreparationPlanCreateWithoutReviewInput[] | PreparationPlanUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: PreparationPlanCreateOrConnectWithoutReviewInput | PreparationPlanCreateOrConnectWithoutReviewInput[]
    createMany?: PreparationPlanCreateManyReviewInputEnvelope
    connect?: PreparationPlanWhereUniqueInput | PreparationPlanWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TechnicalQuestionUpdateManyWithoutReviewNestedInput = {
    create?: XOR<TechnicalQuestionCreateWithoutReviewInput, TechnicalQuestionUncheckedCreateWithoutReviewInput> | TechnicalQuestionCreateWithoutReviewInput[] | TechnicalQuestionUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: TechnicalQuestionCreateOrConnectWithoutReviewInput | TechnicalQuestionCreateOrConnectWithoutReviewInput[]
    upsert?: TechnicalQuestionUpsertWithWhereUniqueWithoutReviewInput | TechnicalQuestionUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: TechnicalQuestionCreateManyReviewInputEnvelope
    set?: TechnicalQuestionWhereUniqueInput | TechnicalQuestionWhereUniqueInput[]
    disconnect?: TechnicalQuestionWhereUniqueInput | TechnicalQuestionWhereUniqueInput[]
    delete?: TechnicalQuestionWhereUniqueInput | TechnicalQuestionWhereUniqueInput[]
    connect?: TechnicalQuestionWhereUniqueInput | TechnicalQuestionWhereUniqueInput[]
    update?: TechnicalQuestionUpdateWithWhereUniqueWithoutReviewInput | TechnicalQuestionUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: TechnicalQuestionUpdateManyWithWhereWithoutReviewInput | TechnicalQuestionUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: TechnicalQuestionScalarWhereInput | TechnicalQuestionScalarWhereInput[]
  }

  export type BehavioralQuestionUpdateManyWithoutReviewNestedInput = {
    create?: XOR<BehavioralQuestionCreateWithoutReviewInput, BehavioralQuestionUncheckedCreateWithoutReviewInput> | BehavioralQuestionCreateWithoutReviewInput[] | BehavioralQuestionUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: BehavioralQuestionCreateOrConnectWithoutReviewInput | BehavioralQuestionCreateOrConnectWithoutReviewInput[]
    upsert?: BehavioralQuestionUpsertWithWhereUniqueWithoutReviewInput | BehavioralQuestionUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: BehavioralQuestionCreateManyReviewInputEnvelope
    set?: BehavioralQuestionWhereUniqueInput | BehavioralQuestionWhereUniqueInput[]
    disconnect?: BehavioralQuestionWhereUniqueInput | BehavioralQuestionWhereUniqueInput[]
    delete?: BehavioralQuestionWhereUniqueInput | BehavioralQuestionWhereUniqueInput[]
    connect?: BehavioralQuestionWhereUniqueInput | BehavioralQuestionWhereUniqueInput[]
    update?: BehavioralQuestionUpdateWithWhereUniqueWithoutReviewInput | BehavioralQuestionUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: BehavioralQuestionUpdateManyWithWhereWithoutReviewInput | BehavioralQuestionUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: BehavioralQuestionScalarWhereInput | BehavioralQuestionScalarWhereInput[]
  }

  export type SkillGapUpdateManyWithoutReviewNestedInput = {
    create?: XOR<SkillGapCreateWithoutReviewInput, SkillGapUncheckedCreateWithoutReviewInput> | SkillGapCreateWithoutReviewInput[] | SkillGapUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: SkillGapCreateOrConnectWithoutReviewInput | SkillGapCreateOrConnectWithoutReviewInput[]
    upsert?: SkillGapUpsertWithWhereUniqueWithoutReviewInput | SkillGapUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: SkillGapCreateManyReviewInputEnvelope
    set?: SkillGapWhereUniqueInput | SkillGapWhereUniqueInput[]
    disconnect?: SkillGapWhereUniqueInput | SkillGapWhereUniqueInput[]
    delete?: SkillGapWhereUniqueInput | SkillGapWhereUniqueInput[]
    connect?: SkillGapWhereUniqueInput | SkillGapWhereUniqueInput[]
    update?: SkillGapUpdateWithWhereUniqueWithoutReviewInput | SkillGapUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: SkillGapUpdateManyWithWhereWithoutReviewInput | SkillGapUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: SkillGapScalarWhereInput | SkillGapScalarWhereInput[]
  }

  export type PreparationPlanUpdateManyWithoutReviewNestedInput = {
    create?: XOR<PreparationPlanCreateWithoutReviewInput, PreparationPlanUncheckedCreateWithoutReviewInput> | PreparationPlanCreateWithoutReviewInput[] | PreparationPlanUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: PreparationPlanCreateOrConnectWithoutReviewInput | PreparationPlanCreateOrConnectWithoutReviewInput[]
    upsert?: PreparationPlanUpsertWithWhereUniqueWithoutReviewInput | PreparationPlanUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: PreparationPlanCreateManyReviewInputEnvelope
    set?: PreparationPlanWhereUniqueInput | PreparationPlanWhereUniqueInput[]
    disconnect?: PreparationPlanWhereUniqueInput | PreparationPlanWhereUniqueInput[]
    delete?: PreparationPlanWhereUniqueInput | PreparationPlanWhereUniqueInput[]
    connect?: PreparationPlanWhereUniqueInput | PreparationPlanWhereUniqueInput[]
    update?: PreparationPlanUpdateWithWhereUniqueWithoutReviewInput | PreparationPlanUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: PreparationPlanUpdateManyWithWhereWithoutReviewInput | PreparationPlanUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: PreparationPlanScalarWhereInput | PreparationPlanScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type TechnicalQuestionUncheckedUpdateManyWithoutReviewNestedInput = {
    create?: XOR<TechnicalQuestionCreateWithoutReviewInput, TechnicalQuestionUncheckedCreateWithoutReviewInput> | TechnicalQuestionCreateWithoutReviewInput[] | TechnicalQuestionUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: TechnicalQuestionCreateOrConnectWithoutReviewInput | TechnicalQuestionCreateOrConnectWithoutReviewInput[]
    upsert?: TechnicalQuestionUpsertWithWhereUniqueWithoutReviewInput | TechnicalQuestionUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: TechnicalQuestionCreateManyReviewInputEnvelope
    set?: TechnicalQuestionWhereUniqueInput | TechnicalQuestionWhereUniqueInput[]
    disconnect?: TechnicalQuestionWhereUniqueInput | TechnicalQuestionWhereUniqueInput[]
    delete?: TechnicalQuestionWhereUniqueInput | TechnicalQuestionWhereUniqueInput[]
    connect?: TechnicalQuestionWhereUniqueInput | TechnicalQuestionWhereUniqueInput[]
    update?: TechnicalQuestionUpdateWithWhereUniqueWithoutReviewInput | TechnicalQuestionUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: TechnicalQuestionUpdateManyWithWhereWithoutReviewInput | TechnicalQuestionUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: TechnicalQuestionScalarWhereInput | TechnicalQuestionScalarWhereInput[]
  }

  export type BehavioralQuestionUncheckedUpdateManyWithoutReviewNestedInput = {
    create?: XOR<BehavioralQuestionCreateWithoutReviewInput, BehavioralQuestionUncheckedCreateWithoutReviewInput> | BehavioralQuestionCreateWithoutReviewInput[] | BehavioralQuestionUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: BehavioralQuestionCreateOrConnectWithoutReviewInput | BehavioralQuestionCreateOrConnectWithoutReviewInput[]
    upsert?: BehavioralQuestionUpsertWithWhereUniqueWithoutReviewInput | BehavioralQuestionUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: BehavioralQuestionCreateManyReviewInputEnvelope
    set?: BehavioralQuestionWhereUniqueInput | BehavioralQuestionWhereUniqueInput[]
    disconnect?: BehavioralQuestionWhereUniqueInput | BehavioralQuestionWhereUniqueInput[]
    delete?: BehavioralQuestionWhereUniqueInput | BehavioralQuestionWhereUniqueInput[]
    connect?: BehavioralQuestionWhereUniqueInput | BehavioralQuestionWhereUniqueInput[]
    update?: BehavioralQuestionUpdateWithWhereUniqueWithoutReviewInput | BehavioralQuestionUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: BehavioralQuestionUpdateManyWithWhereWithoutReviewInput | BehavioralQuestionUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: BehavioralQuestionScalarWhereInput | BehavioralQuestionScalarWhereInput[]
  }

  export type SkillGapUncheckedUpdateManyWithoutReviewNestedInput = {
    create?: XOR<SkillGapCreateWithoutReviewInput, SkillGapUncheckedCreateWithoutReviewInput> | SkillGapCreateWithoutReviewInput[] | SkillGapUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: SkillGapCreateOrConnectWithoutReviewInput | SkillGapCreateOrConnectWithoutReviewInput[]
    upsert?: SkillGapUpsertWithWhereUniqueWithoutReviewInput | SkillGapUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: SkillGapCreateManyReviewInputEnvelope
    set?: SkillGapWhereUniqueInput | SkillGapWhereUniqueInput[]
    disconnect?: SkillGapWhereUniqueInput | SkillGapWhereUniqueInput[]
    delete?: SkillGapWhereUniqueInput | SkillGapWhereUniqueInput[]
    connect?: SkillGapWhereUniqueInput | SkillGapWhereUniqueInput[]
    update?: SkillGapUpdateWithWhereUniqueWithoutReviewInput | SkillGapUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: SkillGapUpdateManyWithWhereWithoutReviewInput | SkillGapUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: SkillGapScalarWhereInput | SkillGapScalarWhereInput[]
  }

  export type PreparationPlanUncheckedUpdateManyWithoutReviewNestedInput = {
    create?: XOR<PreparationPlanCreateWithoutReviewInput, PreparationPlanUncheckedCreateWithoutReviewInput> | PreparationPlanCreateWithoutReviewInput[] | PreparationPlanUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: PreparationPlanCreateOrConnectWithoutReviewInput | PreparationPlanCreateOrConnectWithoutReviewInput[]
    upsert?: PreparationPlanUpsertWithWhereUniqueWithoutReviewInput | PreparationPlanUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: PreparationPlanCreateManyReviewInputEnvelope
    set?: PreparationPlanWhereUniqueInput | PreparationPlanWhereUniqueInput[]
    disconnect?: PreparationPlanWhereUniqueInput | PreparationPlanWhereUniqueInput[]
    delete?: PreparationPlanWhereUniqueInput | PreparationPlanWhereUniqueInput[]
    connect?: PreparationPlanWhereUniqueInput | PreparationPlanWhereUniqueInput[]
    update?: PreparationPlanUpdateWithWhereUniqueWithoutReviewInput | PreparationPlanUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: PreparationPlanUpdateManyWithWhereWithoutReviewInput | PreparationPlanUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: PreparationPlanScalarWhereInput | PreparationPlanScalarWhereInput[]
  }

  export type ReviewCreateNestedOneWithoutTechnicalQuestionsInput = {
    create?: XOR<ReviewCreateWithoutTechnicalQuestionsInput, ReviewUncheckedCreateWithoutTechnicalQuestionsInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutTechnicalQuestionsInput
    connect?: ReviewWhereUniqueInput
  }

  export type ReviewUpdateOneRequiredWithoutTechnicalQuestionsNestedInput = {
    create?: XOR<ReviewCreateWithoutTechnicalQuestionsInput, ReviewUncheckedCreateWithoutTechnicalQuestionsInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutTechnicalQuestionsInput
    upsert?: ReviewUpsertWithoutTechnicalQuestionsInput
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutTechnicalQuestionsInput, ReviewUpdateWithoutTechnicalQuestionsInput>, ReviewUncheckedUpdateWithoutTechnicalQuestionsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReviewCreateNestedOneWithoutBehavioralQuestionsInput = {
    create?: XOR<ReviewCreateWithoutBehavioralQuestionsInput, ReviewUncheckedCreateWithoutBehavioralQuestionsInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutBehavioralQuestionsInput
    connect?: ReviewWhereUniqueInput
  }

  export type ReviewUpdateOneRequiredWithoutBehavioralQuestionsNestedInput = {
    create?: XOR<ReviewCreateWithoutBehavioralQuestionsInput, ReviewUncheckedCreateWithoutBehavioralQuestionsInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutBehavioralQuestionsInput
    upsert?: ReviewUpsertWithoutBehavioralQuestionsInput
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutBehavioralQuestionsInput, ReviewUpdateWithoutBehavioralQuestionsInput>, ReviewUncheckedUpdateWithoutBehavioralQuestionsInput>
  }

  export type ReviewCreateNestedOneWithoutSkillGapsInput = {
    create?: XOR<ReviewCreateWithoutSkillGapsInput, ReviewUncheckedCreateWithoutSkillGapsInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutSkillGapsInput
    connect?: ReviewWhereUniqueInput
  }

  export type EnumSeverityFieldUpdateOperationsInput = {
    set?: $Enums.Severity
  }

  export type ReviewUpdateOneRequiredWithoutSkillGapsNestedInput = {
    create?: XOR<ReviewCreateWithoutSkillGapsInput, ReviewUncheckedCreateWithoutSkillGapsInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutSkillGapsInput
    upsert?: ReviewUpsertWithoutSkillGapsInput
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutSkillGapsInput, ReviewUpdateWithoutSkillGapsInput>, ReviewUncheckedUpdateWithoutSkillGapsInput>
  }

  export type PreparationPlanCreatetasksInput = {
    set: string[]
  }

  export type ReviewCreateNestedOneWithoutPreparationPlansInput = {
    create?: XOR<ReviewCreateWithoutPreparationPlansInput, ReviewUncheckedCreateWithoutPreparationPlansInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutPreparationPlansInput
    connect?: ReviewWhereUniqueInput
  }

  export type PreparationPlanUpdatetasksInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ReviewUpdateOneRequiredWithoutPreparationPlansNestedInput = {
    create?: XOR<ReviewCreateWithoutPreparationPlansInput, ReviewUncheckedCreateWithoutPreparationPlansInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutPreparationPlansInput
    upsert?: ReviewUpsertWithoutPreparationPlansInput
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutPreparationPlansInput, ReviewUpdateWithoutPreparationPlansInput>, ReviewUncheckedUpdateWithoutPreparationPlansInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityFilter<$PrismaModel> | $Enums.Severity
  }

  export type NestedEnumSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityWithAggregatesFilter<$PrismaModel> | $Enums.Severity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeverityFilter<$PrismaModel>
    _max?: NestedEnumSeverityFilter<$PrismaModel>
  }

  export type ReviewCreateWithoutUserInput = {
    id?: string
    resume: string
    selfDescription?: string | null
    jobDescription: string
    title?: string
    matchScore: number
    createdAt?: Date | string
    updatedAt?: Date | string
    technicalQuestions?: TechnicalQuestionCreateNestedManyWithoutReviewInput
    behavioralQuestions?: BehavioralQuestionCreateNestedManyWithoutReviewInput
    skillGaps?: SkillGapCreateNestedManyWithoutReviewInput
    preparationPlans?: PreparationPlanCreateNestedManyWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: string
    resume: string
    selfDescription?: string | null
    jobDescription: string
    title?: string
    matchScore: number
    createdAt?: Date | string
    updatedAt?: Date | string
    technicalQuestions?: TechnicalQuestionUncheckedCreateNestedManyWithoutReviewInput
    behavioralQuestions?: BehavioralQuestionUncheckedCreateNestedManyWithoutReviewInput
    skillGaps?: SkillGapUncheckedCreateNestedManyWithoutReviewInput
    preparationPlans?: PreparationPlanUncheckedCreateNestedManyWithoutReviewInput
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: StringFilter<"Review"> | string
    userId?: StringFilter<"Review"> | string
    resume?: StringFilter<"Review"> | string
    selfDescription?: StringNullableFilter<"Review"> | string | null
    jobDescription?: StringFilter<"Review"> | string
    title?: StringFilter<"Review"> | string
    matchScore?: FloatFilter<"Review"> | number
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type TechnicalQuestionCreateWithoutReviewInput = {
    question: string
    intention: string
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TechnicalQuestionUncheckedCreateWithoutReviewInput = {
    id?: number
    question: string
    intention: string
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TechnicalQuestionCreateOrConnectWithoutReviewInput = {
    where: TechnicalQuestionWhereUniqueInput
    create: XOR<TechnicalQuestionCreateWithoutReviewInput, TechnicalQuestionUncheckedCreateWithoutReviewInput>
  }

  export type TechnicalQuestionCreateManyReviewInputEnvelope = {
    data: TechnicalQuestionCreateManyReviewInput | TechnicalQuestionCreateManyReviewInput[]
    skipDuplicates?: boolean
  }

  export type BehavioralQuestionCreateWithoutReviewInput = {
    question: string
    intention: string
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BehavioralQuestionUncheckedCreateWithoutReviewInput = {
    id?: number
    question: string
    intention: string
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BehavioralQuestionCreateOrConnectWithoutReviewInput = {
    where: BehavioralQuestionWhereUniqueInput
    create: XOR<BehavioralQuestionCreateWithoutReviewInput, BehavioralQuestionUncheckedCreateWithoutReviewInput>
  }

  export type BehavioralQuestionCreateManyReviewInputEnvelope = {
    data: BehavioralQuestionCreateManyReviewInput | BehavioralQuestionCreateManyReviewInput[]
    skipDuplicates?: boolean
  }

  export type SkillGapCreateWithoutReviewInput = {
    skill: string
    severity: $Enums.Severity
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillGapUncheckedCreateWithoutReviewInput = {
    id?: number
    skill: string
    severity: $Enums.Severity
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillGapCreateOrConnectWithoutReviewInput = {
    where: SkillGapWhereUniqueInput
    create: XOR<SkillGapCreateWithoutReviewInput, SkillGapUncheckedCreateWithoutReviewInput>
  }

  export type SkillGapCreateManyReviewInputEnvelope = {
    data: SkillGapCreateManyReviewInput | SkillGapCreateManyReviewInput[]
    skipDuplicates?: boolean
  }

  export type PreparationPlanCreateWithoutReviewInput = {
    day: number
    focus: string
    tasks?: PreparationPlanCreatetasksInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PreparationPlanUncheckedCreateWithoutReviewInput = {
    id?: number
    day: number
    focus: string
    tasks?: PreparationPlanCreatetasksInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PreparationPlanCreateOrConnectWithoutReviewInput = {
    where: PreparationPlanWhereUniqueInput
    create: XOR<PreparationPlanCreateWithoutReviewInput, PreparationPlanUncheckedCreateWithoutReviewInput>
  }

  export type PreparationPlanCreateManyReviewInputEnvelope = {
    data: PreparationPlanCreateManyReviewInput | PreparationPlanCreateManyReviewInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutReviewsInput = {
    id?: string
    userName: string
    email: string
    password: string
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: string
    userName: string
    email: string
    password: string
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type TechnicalQuestionUpsertWithWhereUniqueWithoutReviewInput = {
    where: TechnicalQuestionWhereUniqueInput
    update: XOR<TechnicalQuestionUpdateWithoutReviewInput, TechnicalQuestionUncheckedUpdateWithoutReviewInput>
    create: XOR<TechnicalQuestionCreateWithoutReviewInput, TechnicalQuestionUncheckedCreateWithoutReviewInput>
  }

  export type TechnicalQuestionUpdateWithWhereUniqueWithoutReviewInput = {
    where: TechnicalQuestionWhereUniqueInput
    data: XOR<TechnicalQuestionUpdateWithoutReviewInput, TechnicalQuestionUncheckedUpdateWithoutReviewInput>
  }

  export type TechnicalQuestionUpdateManyWithWhereWithoutReviewInput = {
    where: TechnicalQuestionScalarWhereInput
    data: XOR<TechnicalQuestionUpdateManyMutationInput, TechnicalQuestionUncheckedUpdateManyWithoutReviewInput>
  }

  export type TechnicalQuestionScalarWhereInput = {
    AND?: TechnicalQuestionScalarWhereInput | TechnicalQuestionScalarWhereInput[]
    OR?: TechnicalQuestionScalarWhereInput[]
    NOT?: TechnicalQuestionScalarWhereInput | TechnicalQuestionScalarWhereInput[]
    id?: IntFilter<"TechnicalQuestion"> | number
    reviewId?: StringFilter<"TechnicalQuestion"> | string
    question?: StringFilter<"TechnicalQuestion"> | string
    intention?: StringFilter<"TechnicalQuestion"> | string
    answer?: StringFilter<"TechnicalQuestion"> | string
    createdAt?: DateTimeFilter<"TechnicalQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"TechnicalQuestion"> | Date | string
  }

  export type BehavioralQuestionUpsertWithWhereUniqueWithoutReviewInput = {
    where: BehavioralQuestionWhereUniqueInput
    update: XOR<BehavioralQuestionUpdateWithoutReviewInput, BehavioralQuestionUncheckedUpdateWithoutReviewInput>
    create: XOR<BehavioralQuestionCreateWithoutReviewInput, BehavioralQuestionUncheckedCreateWithoutReviewInput>
  }

  export type BehavioralQuestionUpdateWithWhereUniqueWithoutReviewInput = {
    where: BehavioralQuestionWhereUniqueInput
    data: XOR<BehavioralQuestionUpdateWithoutReviewInput, BehavioralQuestionUncheckedUpdateWithoutReviewInput>
  }

  export type BehavioralQuestionUpdateManyWithWhereWithoutReviewInput = {
    where: BehavioralQuestionScalarWhereInput
    data: XOR<BehavioralQuestionUpdateManyMutationInput, BehavioralQuestionUncheckedUpdateManyWithoutReviewInput>
  }

  export type BehavioralQuestionScalarWhereInput = {
    AND?: BehavioralQuestionScalarWhereInput | BehavioralQuestionScalarWhereInput[]
    OR?: BehavioralQuestionScalarWhereInput[]
    NOT?: BehavioralQuestionScalarWhereInput | BehavioralQuestionScalarWhereInput[]
    id?: IntFilter<"BehavioralQuestion"> | number
    reviewId?: StringFilter<"BehavioralQuestion"> | string
    question?: StringFilter<"BehavioralQuestion"> | string
    intention?: StringFilter<"BehavioralQuestion"> | string
    answer?: StringFilter<"BehavioralQuestion"> | string
    createdAt?: DateTimeFilter<"BehavioralQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"BehavioralQuestion"> | Date | string
  }

  export type SkillGapUpsertWithWhereUniqueWithoutReviewInput = {
    where: SkillGapWhereUniqueInput
    update: XOR<SkillGapUpdateWithoutReviewInput, SkillGapUncheckedUpdateWithoutReviewInput>
    create: XOR<SkillGapCreateWithoutReviewInput, SkillGapUncheckedCreateWithoutReviewInput>
  }

  export type SkillGapUpdateWithWhereUniqueWithoutReviewInput = {
    where: SkillGapWhereUniqueInput
    data: XOR<SkillGapUpdateWithoutReviewInput, SkillGapUncheckedUpdateWithoutReviewInput>
  }

  export type SkillGapUpdateManyWithWhereWithoutReviewInput = {
    where: SkillGapScalarWhereInput
    data: XOR<SkillGapUpdateManyMutationInput, SkillGapUncheckedUpdateManyWithoutReviewInput>
  }

  export type SkillGapScalarWhereInput = {
    AND?: SkillGapScalarWhereInput | SkillGapScalarWhereInput[]
    OR?: SkillGapScalarWhereInput[]
    NOT?: SkillGapScalarWhereInput | SkillGapScalarWhereInput[]
    id?: IntFilter<"SkillGap"> | number
    reviewId?: StringFilter<"SkillGap"> | string
    skill?: StringFilter<"SkillGap"> | string
    severity?: EnumSeverityFilter<"SkillGap"> | $Enums.Severity
    createdAt?: DateTimeFilter<"SkillGap"> | Date | string
    updatedAt?: DateTimeFilter<"SkillGap"> | Date | string
  }

  export type PreparationPlanUpsertWithWhereUniqueWithoutReviewInput = {
    where: PreparationPlanWhereUniqueInput
    update: XOR<PreparationPlanUpdateWithoutReviewInput, PreparationPlanUncheckedUpdateWithoutReviewInput>
    create: XOR<PreparationPlanCreateWithoutReviewInput, PreparationPlanUncheckedCreateWithoutReviewInput>
  }

  export type PreparationPlanUpdateWithWhereUniqueWithoutReviewInput = {
    where: PreparationPlanWhereUniqueInput
    data: XOR<PreparationPlanUpdateWithoutReviewInput, PreparationPlanUncheckedUpdateWithoutReviewInput>
  }

  export type PreparationPlanUpdateManyWithWhereWithoutReviewInput = {
    where: PreparationPlanScalarWhereInput
    data: XOR<PreparationPlanUpdateManyMutationInput, PreparationPlanUncheckedUpdateManyWithoutReviewInput>
  }

  export type PreparationPlanScalarWhereInput = {
    AND?: PreparationPlanScalarWhereInput | PreparationPlanScalarWhereInput[]
    OR?: PreparationPlanScalarWhereInput[]
    NOT?: PreparationPlanScalarWhereInput | PreparationPlanScalarWhereInput[]
    id?: IntFilter<"PreparationPlan"> | number
    reviewId?: StringFilter<"PreparationPlan"> | string
    day?: IntFilter<"PreparationPlan"> | number
    focus?: StringFilter<"PreparationPlan"> | string
    tasks?: StringNullableListFilter<"PreparationPlan">
    createdAt?: DateTimeFilter<"PreparationPlan"> | Date | string
    updatedAt?: DateTimeFilter<"PreparationPlan"> | Date | string
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateWithoutTechnicalQuestionsInput = {
    id?: string
    resume: string
    selfDescription?: string | null
    jobDescription: string
    title?: string
    matchScore: number
    createdAt?: Date | string
    updatedAt?: Date | string
    behavioralQuestions?: BehavioralQuestionCreateNestedManyWithoutReviewInput
    skillGaps?: SkillGapCreateNestedManyWithoutReviewInput
    preparationPlans?: PreparationPlanCreateNestedManyWithoutReviewInput
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutTechnicalQuestionsInput = {
    id?: string
    userId: string
    resume: string
    selfDescription?: string | null
    jobDescription: string
    title?: string
    matchScore: number
    createdAt?: Date | string
    updatedAt?: Date | string
    behavioralQuestions?: BehavioralQuestionUncheckedCreateNestedManyWithoutReviewInput
    skillGaps?: SkillGapUncheckedCreateNestedManyWithoutReviewInput
    preparationPlans?: PreparationPlanUncheckedCreateNestedManyWithoutReviewInput
  }

  export type ReviewCreateOrConnectWithoutTechnicalQuestionsInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutTechnicalQuestionsInput, ReviewUncheckedCreateWithoutTechnicalQuestionsInput>
  }

  export type ReviewUpsertWithoutTechnicalQuestionsInput = {
    update: XOR<ReviewUpdateWithoutTechnicalQuestionsInput, ReviewUncheckedUpdateWithoutTechnicalQuestionsInput>
    create: XOR<ReviewCreateWithoutTechnicalQuestionsInput, ReviewUncheckedCreateWithoutTechnicalQuestionsInput>
    where?: ReviewWhereInput
  }

  export type ReviewUpdateToOneWithWhereWithoutTechnicalQuestionsInput = {
    where?: ReviewWhereInput
    data: XOR<ReviewUpdateWithoutTechnicalQuestionsInput, ReviewUncheckedUpdateWithoutTechnicalQuestionsInput>
  }

  export type ReviewUpdateWithoutTechnicalQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    resume?: StringFieldUpdateOperationsInput | string
    selfDescription?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    matchScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    behavioralQuestions?: BehavioralQuestionUpdateManyWithoutReviewNestedInput
    skillGaps?: SkillGapUpdateManyWithoutReviewNestedInput
    preparationPlans?: PreparationPlanUpdateManyWithoutReviewNestedInput
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutTechnicalQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    resume?: StringFieldUpdateOperationsInput | string
    selfDescription?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    matchScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    behavioralQuestions?: BehavioralQuestionUncheckedUpdateManyWithoutReviewNestedInput
    skillGaps?: SkillGapUncheckedUpdateManyWithoutReviewNestedInput
    preparationPlans?: PreparationPlanUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type ReviewCreateWithoutBehavioralQuestionsInput = {
    id?: string
    resume: string
    selfDescription?: string | null
    jobDescription: string
    title?: string
    matchScore: number
    createdAt?: Date | string
    updatedAt?: Date | string
    technicalQuestions?: TechnicalQuestionCreateNestedManyWithoutReviewInput
    skillGaps?: SkillGapCreateNestedManyWithoutReviewInput
    preparationPlans?: PreparationPlanCreateNestedManyWithoutReviewInput
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutBehavioralQuestionsInput = {
    id?: string
    userId: string
    resume: string
    selfDescription?: string | null
    jobDescription: string
    title?: string
    matchScore: number
    createdAt?: Date | string
    updatedAt?: Date | string
    technicalQuestions?: TechnicalQuestionUncheckedCreateNestedManyWithoutReviewInput
    skillGaps?: SkillGapUncheckedCreateNestedManyWithoutReviewInput
    preparationPlans?: PreparationPlanUncheckedCreateNestedManyWithoutReviewInput
  }

  export type ReviewCreateOrConnectWithoutBehavioralQuestionsInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutBehavioralQuestionsInput, ReviewUncheckedCreateWithoutBehavioralQuestionsInput>
  }

  export type ReviewUpsertWithoutBehavioralQuestionsInput = {
    update: XOR<ReviewUpdateWithoutBehavioralQuestionsInput, ReviewUncheckedUpdateWithoutBehavioralQuestionsInput>
    create: XOR<ReviewCreateWithoutBehavioralQuestionsInput, ReviewUncheckedCreateWithoutBehavioralQuestionsInput>
    where?: ReviewWhereInput
  }

  export type ReviewUpdateToOneWithWhereWithoutBehavioralQuestionsInput = {
    where?: ReviewWhereInput
    data: XOR<ReviewUpdateWithoutBehavioralQuestionsInput, ReviewUncheckedUpdateWithoutBehavioralQuestionsInput>
  }

  export type ReviewUpdateWithoutBehavioralQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    resume?: StringFieldUpdateOperationsInput | string
    selfDescription?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    matchScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technicalQuestions?: TechnicalQuestionUpdateManyWithoutReviewNestedInput
    skillGaps?: SkillGapUpdateManyWithoutReviewNestedInput
    preparationPlans?: PreparationPlanUpdateManyWithoutReviewNestedInput
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutBehavioralQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    resume?: StringFieldUpdateOperationsInput | string
    selfDescription?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    matchScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technicalQuestions?: TechnicalQuestionUncheckedUpdateManyWithoutReviewNestedInput
    skillGaps?: SkillGapUncheckedUpdateManyWithoutReviewNestedInput
    preparationPlans?: PreparationPlanUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type ReviewCreateWithoutSkillGapsInput = {
    id?: string
    resume: string
    selfDescription?: string | null
    jobDescription: string
    title?: string
    matchScore: number
    createdAt?: Date | string
    updatedAt?: Date | string
    technicalQuestions?: TechnicalQuestionCreateNestedManyWithoutReviewInput
    behavioralQuestions?: BehavioralQuestionCreateNestedManyWithoutReviewInput
    preparationPlans?: PreparationPlanCreateNestedManyWithoutReviewInput
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutSkillGapsInput = {
    id?: string
    userId: string
    resume: string
    selfDescription?: string | null
    jobDescription: string
    title?: string
    matchScore: number
    createdAt?: Date | string
    updatedAt?: Date | string
    technicalQuestions?: TechnicalQuestionUncheckedCreateNestedManyWithoutReviewInput
    behavioralQuestions?: BehavioralQuestionUncheckedCreateNestedManyWithoutReviewInput
    preparationPlans?: PreparationPlanUncheckedCreateNestedManyWithoutReviewInput
  }

  export type ReviewCreateOrConnectWithoutSkillGapsInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutSkillGapsInput, ReviewUncheckedCreateWithoutSkillGapsInput>
  }

  export type ReviewUpsertWithoutSkillGapsInput = {
    update: XOR<ReviewUpdateWithoutSkillGapsInput, ReviewUncheckedUpdateWithoutSkillGapsInput>
    create: XOR<ReviewCreateWithoutSkillGapsInput, ReviewUncheckedCreateWithoutSkillGapsInput>
    where?: ReviewWhereInput
  }

  export type ReviewUpdateToOneWithWhereWithoutSkillGapsInput = {
    where?: ReviewWhereInput
    data: XOR<ReviewUpdateWithoutSkillGapsInput, ReviewUncheckedUpdateWithoutSkillGapsInput>
  }

  export type ReviewUpdateWithoutSkillGapsInput = {
    id?: StringFieldUpdateOperationsInput | string
    resume?: StringFieldUpdateOperationsInput | string
    selfDescription?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    matchScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technicalQuestions?: TechnicalQuestionUpdateManyWithoutReviewNestedInput
    behavioralQuestions?: BehavioralQuestionUpdateManyWithoutReviewNestedInput
    preparationPlans?: PreparationPlanUpdateManyWithoutReviewNestedInput
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutSkillGapsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    resume?: StringFieldUpdateOperationsInput | string
    selfDescription?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    matchScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technicalQuestions?: TechnicalQuestionUncheckedUpdateManyWithoutReviewNestedInput
    behavioralQuestions?: BehavioralQuestionUncheckedUpdateManyWithoutReviewNestedInput
    preparationPlans?: PreparationPlanUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type ReviewCreateWithoutPreparationPlansInput = {
    id?: string
    resume: string
    selfDescription?: string | null
    jobDescription: string
    title?: string
    matchScore: number
    createdAt?: Date | string
    updatedAt?: Date | string
    technicalQuestions?: TechnicalQuestionCreateNestedManyWithoutReviewInput
    behavioralQuestions?: BehavioralQuestionCreateNestedManyWithoutReviewInput
    skillGaps?: SkillGapCreateNestedManyWithoutReviewInput
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutPreparationPlansInput = {
    id?: string
    userId: string
    resume: string
    selfDescription?: string | null
    jobDescription: string
    title?: string
    matchScore: number
    createdAt?: Date | string
    updatedAt?: Date | string
    technicalQuestions?: TechnicalQuestionUncheckedCreateNestedManyWithoutReviewInput
    behavioralQuestions?: BehavioralQuestionUncheckedCreateNestedManyWithoutReviewInput
    skillGaps?: SkillGapUncheckedCreateNestedManyWithoutReviewInput
  }

  export type ReviewCreateOrConnectWithoutPreparationPlansInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutPreparationPlansInput, ReviewUncheckedCreateWithoutPreparationPlansInput>
  }

  export type ReviewUpsertWithoutPreparationPlansInput = {
    update: XOR<ReviewUpdateWithoutPreparationPlansInput, ReviewUncheckedUpdateWithoutPreparationPlansInput>
    create: XOR<ReviewCreateWithoutPreparationPlansInput, ReviewUncheckedCreateWithoutPreparationPlansInput>
    where?: ReviewWhereInput
  }

  export type ReviewUpdateToOneWithWhereWithoutPreparationPlansInput = {
    where?: ReviewWhereInput
    data: XOR<ReviewUpdateWithoutPreparationPlansInput, ReviewUncheckedUpdateWithoutPreparationPlansInput>
  }

  export type ReviewUpdateWithoutPreparationPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    resume?: StringFieldUpdateOperationsInput | string
    selfDescription?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    matchScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technicalQuestions?: TechnicalQuestionUpdateManyWithoutReviewNestedInput
    behavioralQuestions?: BehavioralQuestionUpdateManyWithoutReviewNestedInput
    skillGaps?: SkillGapUpdateManyWithoutReviewNestedInput
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutPreparationPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    resume?: StringFieldUpdateOperationsInput | string
    selfDescription?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    matchScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technicalQuestions?: TechnicalQuestionUncheckedUpdateManyWithoutReviewNestedInput
    behavioralQuestions?: BehavioralQuestionUncheckedUpdateManyWithoutReviewNestedInput
    skillGaps?: SkillGapUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type ReviewCreateManyUserInput = {
    id?: string
    resume: string
    selfDescription?: string | null
    jobDescription: string
    title?: string
    matchScore: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    resume?: StringFieldUpdateOperationsInput | string
    selfDescription?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    matchScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technicalQuestions?: TechnicalQuestionUpdateManyWithoutReviewNestedInput
    behavioralQuestions?: BehavioralQuestionUpdateManyWithoutReviewNestedInput
    skillGaps?: SkillGapUpdateManyWithoutReviewNestedInput
    preparationPlans?: PreparationPlanUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    resume?: StringFieldUpdateOperationsInput | string
    selfDescription?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    matchScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technicalQuestions?: TechnicalQuestionUncheckedUpdateManyWithoutReviewNestedInput
    behavioralQuestions?: BehavioralQuestionUncheckedUpdateManyWithoutReviewNestedInput
    skillGaps?: SkillGapUncheckedUpdateManyWithoutReviewNestedInput
    preparationPlans?: PreparationPlanUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    resume?: StringFieldUpdateOperationsInput | string
    selfDescription?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    matchScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TechnicalQuestionCreateManyReviewInput = {
    id?: number
    question: string
    intention: string
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BehavioralQuestionCreateManyReviewInput = {
    id?: number
    question: string
    intention: string
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillGapCreateManyReviewInput = {
    id?: number
    skill: string
    severity: $Enums.Severity
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PreparationPlanCreateManyReviewInput = {
    id?: number
    day: number
    focus: string
    tasks?: PreparationPlanCreatetasksInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TechnicalQuestionUpdateWithoutReviewInput = {
    question?: StringFieldUpdateOperationsInput | string
    intention?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TechnicalQuestionUncheckedUpdateWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    intention?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TechnicalQuestionUncheckedUpdateManyWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    intention?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BehavioralQuestionUpdateWithoutReviewInput = {
    question?: StringFieldUpdateOperationsInput | string
    intention?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BehavioralQuestionUncheckedUpdateWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    intention?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BehavioralQuestionUncheckedUpdateManyWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    intention?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillGapUpdateWithoutReviewInput = {
    skill?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillGapUncheckedUpdateWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    skill?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillGapUncheckedUpdateManyWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    skill?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PreparationPlanUpdateWithoutReviewInput = {
    day?: IntFieldUpdateOperationsInput | number
    focus?: StringFieldUpdateOperationsInput | string
    tasks?: PreparationPlanUpdatetasksInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PreparationPlanUncheckedUpdateWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: IntFieldUpdateOperationsInput | number
    focus?: StringFieldUpdateOperationsInput | string
    tasks?: PreparationPlanUpdatetasksInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PreparationPlanUncheckedUpdateManyWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: IntFieldUpdateOperationsInput | number
    focus?: StringFieldUpdateOperationsInput | string
    tasks?: PreparationPlanUpdatetasksInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}