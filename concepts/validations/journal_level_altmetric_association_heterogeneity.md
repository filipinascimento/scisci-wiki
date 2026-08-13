# Journal-level altmetric association heterogeneity

## Summary

Journal-level altmetric association heterogeneity is the validation motif that altmetric-citation associations should be checked across journals because source validity can vary by journal cell and field mix.

## Canonical Form

- Unit of analysis: journal, altmetric source, article pair, sign-test outcome, or source-journal cell.
- Typical representation: per-journal success count, failure count, equal-count cell, random-effect source model, or minimum-tested-journal filter.
- Validation target: prevent source-level aggregate associations from hiding journal-level instability.
- Empirical signature: a source shows significant association overall but sparse or mixed evidence across journals.

## Uses in Science of Science

- Extends [adjacent-article altmetric sign test](adjacent_article_altmetric_sign_test.md).
- Connects altmetric validation to [journal fixed-effect citation model](../methods/journal_fixed_effect_citation_model.md).
- Helps interpret [altmetric validation power floor](altmetric_validation_power_floor.md) for sparse journal-source combinations.

## Operationalization

- Compute source-citation association tests within journals.
- Report success, failure, tie, and insufficient-evidence cells.
- Apply minimum article and nonzero-source counts per journal.
- Use hierarchical models when source counts permit.

## Evidence and Validations

- Verified full-text evidence from Thelwall et al. (2013) evaluates whether higher altmetric scores associate with higher citations across many PubMed journals.
- The paper reports that sparse cells and journal-level variation affect interpretation of source-specific results.

## Caveats

- Multidisciplinary journals weaken same-field assumptions.
- Journal-level tests can be underpowered for sparse sources.
- Journal fixed effects do not remove article-topic or age confounding by themselves.

## Links

- [adjacent-article altmetric sign test](adjacent_article_altmetric_sign_test.md)
- [journal fixed-effect citation model](../methods/journal_fixed_effect_citation_model.md)
- [altmetric validation power floor](altmetric_validation_power_floor.md)
- [altmetric temporal correlation reversal](altmetric_temporal_correlation_reversal.md)

## References

- Thelwall, M., Haustein, S., Lariviere, V., & Sugimoto, C. R. (2013). Do altmetrics work? Twitter and ten other social web services. *PLOS ONE*, 8(5), e64841. https://doi.org/10.1371/journal.pone.0064841 [OpenAlex: W2073023209; Dimensions: pub.1028078949; WoS: unknown]

## Metadata

- Concept ID: `journal_level_altmetric_association_heterogeneity`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Thelwall et al. (2013) (2013)
- Latest seen paper: Thelwall et al. (2013) (2013)
- Primary reference DOI: `10.1371/journal.pone.0064841`
- OpenAlex ID: `W2073023209`
- Dimensions ID: `pub.1028078949`
- SciSciNet ID: `W2073023209`
- Aliases: journal-specific altmetric validity; source-journal association heterogeneity; journal-level altmetric sign-test variation
