# Country-field weighted disambiguation audit

## Summary

Country-field weighted disambiguation audit is a validation check that compares field-weighted country productivity trends against author-disambiguation artifacts that could spuriously merge researchers.

## Canonical Form

- Unit of analysis: author identity, country, field, productivity trend, disambiguation algorithm, or citation-elite sample.
- Typical representation: country-by-field output panel, disambiguation-error sensitivity table, or merged-author artifact screen.
- Validation target: test whether observed country-level author inequality is explained by homonym merger rather than real productivity or citation patterns.
- Empirical signature: high-growth country-field strata do not show implausible author aggregation after disambiguation checks.

## Uses in Science of Science

- Adds a country-field robustness layer to [author name disambiguation](../methods/author_name_disambiguation.md).
- Complements [homonym-synonym author errors](homonym_synonym_author_errors.md) and [disambiguation evaluation metrics](disambiguation_evaluation_metrics.md).
- Supports interpretation of the [WoS author citation inequality panel](../datasets/wos_author_citation_inequality_panel.md).
- Helps evaluate whether [citation elite geography](../representations/citation_elite_geography.md) reflects real concentration or identity-linkage bias.

## Operationalization

- Compute country-level output growth by field and compare it with changes in authors per output.
- Identify strata where common names, rapid system growth, and high coauthorship could cause author merging.
- Re-estimate inequality after excluding or downweighting high-risk country-field strata.
- Compare algorithmic author IDs to ORCID, institutional profiles, or curated samples where available.
- Report whether geography and elite-concentration conclusions persist under conservative disambiguation assumptions.

## Evidence and Validations

- Verified full-text evidence from Nielsen and Andersen (2021) discusses whether author-name disambiguation could spuriously merge East Asian authors.
- Their robustness logic uses field-weighted country productivity trends to evaluate whether the observed inequality patterns are plausible artifacts.
- The motif separates a general disambiguation benchmark from a study-specific audit tied to geography, field composition, and growth.
- It is especially relevant when author-level inequality is compared across countries with different name distributions.

## Caveats

- Country-field weighting cannot prove that all author identities are correct.
- Disambiguation errors may differ within countries by institution, name frequency, and career stage.
- External validation IDs are not evenly available, so the audit can inherit coverage bias.

## Links

- [author name disambiguation](../methods/author_name_disambiguation.md)
- [homonym-synonym author errors](homonym_synonym_author_errors.md)
- [disambiguation evaluation metrics](disambiguation_evaluation_metrics.md)
- [WoS author citation inequality panel](../datasets/wos_author_citation_inequality_panel.md)
- [citation elite geography](../representations/citation_elite_geography.md)
- [geographic tail Gini divergence](geographic_tail_gini_divergence.md)
- [common-name block bias](common_name_block_bias.md)

## References

- Nielsen, M. W., & Andersen, J. P. (2021). Global citation inequality is on the rise. *Proceedings of the National Academy of Sciences*, 118(7), e2012208118. https://doi.org/10.1073/pnas.2012208118 [OpenAlex: W3128893582; Dimensions: pub.1135221443; SciSciNet: W3128893582; WoS: unknown]

## Metadata

- Concept ID: `country_field_weighted_disambiguation_audit`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Nielsen and Andersen (2021) (2021)
- Latest seen paper: Nielsen and Andersen (2021) (2021)
- Primary reference DOI: `10.1073/pnas.2012208118`
- OpenAlex ID: `W3128893582`
- Dimensions ID: `pub.1135221443`
- SciSciNet ID: `W3128893582`
- Aliases: country-field disambiguation audit; East Asian author-merger check; field-weighted name-disambiguation validation; geography disambiguation robustness
