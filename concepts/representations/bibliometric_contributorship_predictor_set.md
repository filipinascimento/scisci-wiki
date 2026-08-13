# Bibliometric contributorship predictor set

## Summary

Bibliometric contributorship predictor set is the author-paper feature schema used to infer contribution roles from byline, team, document, collaboration, seniority, and productivity metadata.

## Canonical Form

- Unit of analysis: author-paper pair, paper-level feature, author-level feature, or contribution-role prediction row.
- Typical representation: feature table with author position, team size, document type, country count, institution count, career age, and productivity rate.
- Representation target: encode bibliometric context for contribution-role imputation.
- Empirical signature: observed contribution labels can be predicted from structured paper and author features.

## Uses in Science of Science

- Provides the feature layer for [contributorship prediction models](../methods/contributorship_prediction_models.md).
- Links observed [author contribution statements](../datasets/author_contribution_statements.md) to scalable role inference.
- Supports [Bayesian contributorship imputation](../methods/bayesian_contributorship_imputation.md) and [author-order contribution-proxy limits](../validations/author_order_contribution_proxy_limits.md).
- Helps convert coauthorship records into role-aware [contribution role vectors](contribution_role_vectors.md).

## Operationalization

- Define author-paper rows by matching authors to publications.
- Add paper-level features such as document type, number of authors, number of countries, and number of institutions.
- Add author-level features such as author position, years since first publication, and average publications per year at publication time.
- Join observed contribution labels where available.
- Store variable definitions and source fields so imputed roles can be audited and ported across datasets.

## Evidence and Validations

- Verified full-text evidence from Robinson-Garcia et al. (2020) states that bibliometric indicators are used as predictors of contributorship.
- The paper separates paper-level variables, including document type, number of authors, number of countries, and number of institutions, from author-level variables, including byline position, years since first publication, and average publications per year.
- Their variable table defines these features and their Web of Science or PLOS sources alongside contribution variables such as writing, data analysis, experiments, design, resources, and number of contributions.

## Caveats

- Predictor features can encode field, journal, seniority, and authorship-culture biases.
- Good prediction inside one source does not prove portability to other journals or disciplines.
- Feature schemas should be versioned because byline norms and metadata completeness change over time.

## Links

- [contributorship prediction models](../methods/contributorship_prediction_models.md)
- [Bayesian contributorship imputation](../methods/bayesian_contributorship_imputation.md)
- [author-order contribution-proxy limits](../validations/author_order_contribution_proxy_limits.md)
- [contribution role vectors](contribution_role_vectors.md)
- [author contribution statements](../datasets/author_contribution_statements.md)
- [same-source contribution prediction boundary](../validations/same_source_contribution_prediction_boundary.md)

## References

- Robinson-Garcia, N., Costas, R., Sugimoto, C. R., Lariviere, V., & Nane, G. F. (2020). Task specialization across research careers. *eLife*, 9, e60586. https://doi.org/10.7554/elife.60586 [OpenAlex: W3097159753; Dimensions: pub.1132069903; SciSciNet: W3097159753; WoS: unknown]

## Metadata

- Concept ID: `bibliometric_contributorship_predictor_set`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Robinson-Garcia et al. (2020) (2020)
- Latest seen paper: Robinson-Garcia et al. (2020) (2020)
- Primary reference DOI: `10.7554/elife.60586`
- OpenAlex ID: `W3097159753`
- Dimensions ID: `pub.1132069903`
- SciSciNet ID: `W3097159753`
- Aliases: contributorship feature schema; author-paper role predictors; bibliometric role predictor table; contribution-imputation predictor set
