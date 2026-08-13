# Low-output author exclusion conservative bias

## Summary

Low-output author exclusion conservative bias is the risk that removing authors with very few publications improves disambiguation reliability but understates the full level of citation inequality.

## Canonical Form

- Unit of analysis: author population, publication-count threshold, disambiguated author profile, citation distribution, or transient scientist group.
- Typical representation: inclusion threshold, excluded-author share, expected citation level of excluded authors, and inequality estimates with caveat.
- Validation target: evaluate how author-profile quality filters alter inequality conclusions.
- Empirical signature: excluded low-output authors are likely low-citation authors, making measured inequality conservative relative to the full scientist population.

## Uses in Science of Science

- Provides a population-denominator caveat for [author citation Gini](../measures/author_citation_gini.md).
- Qualifies [citation elite concentration](../measures/citation_elite_concentration.md) when the author population excludes transient or low-output scientists.
- Connects author-disambiguation reliability to inequality measurement and [attention inequality](../mechanisms/attention_inequality.md).

## Operationalization

- Record the minimum publication threshold used to define author profiles.
- Estimate the number and characteristics of excluded low-output authors.
- Compare inequality estimates with looser thresholds when disambiguation quality permits.
- Interpret main estimates as conservative when excluded authors mostly have low cumulative citations.
- Report how the exclusion interacts with short research careers, field coverage, and database completeness.

## Evidence and Validations

- Verified full-text evidence from Nielsen and Andersen (2021) restricts the analysis to authors with at least five Web of Science publications because author-disambiguation errors are more common for authors with few publications.
- The paper states that most scientists with four or fewer publications have low cumulative citation rates.
- Nielsen and Andersen therefore interpret their results as conservative estimates of citation disparities in a global science system with increasing short-term scientific careers.
- This design choice links author-disambiguation quality to the measured lower tail of the citation distribution.

## Caveats

- The excluded population can contain early-career scientists, noncareer contributors, field-switchers, and authors from lower-coverage regions.
- Conservative bias is plausible only if excluded authors are mostly low-citation; some fields or databases may differ.
- Lower thresholds may increase false merges and false splits in author disambiguation.

## Links

- [author citation Gini](../measures/author_citation_gini.md)
- [citation elite concentration](../measures/citation_elite_concentration.md)
- [WoS author citation inequality panel](../datasets/wos_author_citation_inequality_panel.md)
- [homonym and synonym author errors](homonym_synonym_author_errors.md)
- [disambiguation evaluation metrics](disambiguation_evaluation_metrics.md)
- [Scopus author profile disambiguation audit](scopus_author_profile_disambiguation_audit.md)
- [attention inequality](../mechanisms/attention_inequality.md)

## References

- Nielsen, M. W., & Andersen, J. P. (2021). Global citation inequality is on the rise. *Proceedings of the National Academy of Sciences*, 118(7), e2012208118. https://doi.org/10.1073/pnas.2012208118 [OpenAlex: W3128893582; Dimensions: pub.1135221443; WoS: unknown]

## Metadata

- Concept ID: `low_output_author_exclusion_conservative_bias`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Nielsen and Andersen (2021) (2021)
- Latest seen paper: Nielsen and Andersen (2021) (2021)
- Primary reference DOI: `10.1073/pnas.2012208118`
- OpenAlex ID: `W3128893582`
- Dimensions ID: `pub.1135221443`
- SciSciNet ID: `W3128893582`
- Aliases: low-output author exclusion; transient scientist denominator bias; publication-threshold conservative bias; sparse-author inequality caveat
