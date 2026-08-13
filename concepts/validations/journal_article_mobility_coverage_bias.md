# Journal-article mobility coverage bias

## Summary

Journal-article mobility coverage bias is the risk that mobility estimates based on indexed journal articles miss or distort researcher movement when fields, countries, languages, or career stages publish first outside the indexed journal corpus.

## Canonical Form

- Unit of analysis: author, publication-affiliation trace, source database, document type, country, or field.
- Typical representation: coverage caveat, source-comparison audit, document-type sensitivity, or discipline-stratified mobility estimate.
- Validation target: whether observed affiliation mobility reflects actual researcher mobility across uneven source coverage.
- Empirical signature: countries or disciplines with lower early journal-index coverage show underestimated origin, movement, or non-mobile rates.

## Uses in Science of Science

- Specializes [citation database coverage sensitivity](citation_database_coverage_sensitivity.md) for mobility studies built from affiliations.
- Qualifies [country of scientific origin proxy](../methods/country_scientific_origin_proxy.md), [affiliation trajectory reconstruction](../methods/affiliation_trajectory_reconstruction.md), and [mobility entry-cohort window](../methods/mobility_entry_cohort_window.md).
- Provides a source-denominator check for [brain circulation networks](../representations/brain_circulation_networks.md), [regional mobility net balance](../measures/regional_mobility_net_balance.md), and [mobile scholar citation premium](../measures/mobile_scholar_citation_premium.md).
- Connects mobility measurement to broader output-denominator concepts such as [authorship output indicator boundary](authorship_output_indicator_boundary.md).

## Operationalization

- Report the database, source indexes, document types, language coverage, and affiliation completeness used to infer mobility.
- Compare mobility estimates across Web of Science, Scopus, OpenAlex, Dimensions, ORCID, CV, and institutional records when possible.
- Stratify results by field and country to identify systems whose early outputs are underrepresented in journal indexes.
- Track how minimum-publication thresholds interact with fields that publish fewer journal articles.
- Treat first-indexed-publication origin as missing or uncertain when earlier non-indexed outputs are likely.

## Evidence and Validations

- Verified full-text evidence from Sugimoto et al. (2017) relies on Web of Science publication-affiliation records over 2008-2015.
- The paper warns that if researchers from some countries do not publish first in a Web of Science-indexed journal, the measures would underestimate mobility from those places.
- Its limitations section further notes that using less than a decade of papers, focusing on journal articles, and adding publication-count restrictions may privilege certain disciplines.
- This caveat turns source coverage and publication format into part of the mobility estimator rather than a neutral data-access detail.

## Caveats

- Broader databases can reduce coverage bias but may add affiliation noise, duplicate records, weaker author disambiguation, or inconsistent document typing.
- Coverage bias can affect both origins and destinations, making direction-specific correction difficult.
- Field and country coverage should be checked against the study question rather than assumed from overall database size.
- This bias can combine with [academic origin ambiguity caveat](academic_origin_ambiguity_caveat.md) when first-indexed publication occurs after training or employment migration.

## Links

- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)
- [country of scientific origin proxy](../methods/country_scientific_origin_proxy.md)
- [affiliation trajectory reconstruction](../methods/affiliation_trajectory_reconstruction.md)
- [mobility entry-cohort window](../methods/mobility_entry_cohort_window.md)
- [authorship output indicator boundary](authorship_output_indicator_boundary.md)
- [brain circulation networks](../representations/brain_circulation_networks.md)
- [regional mobility net balance](../measures/regional_mobility_net_balance.md)
- [mobile scholar citation premium](../measures/mobile_scholar_citation_premium.md)
- [Web of Science](../datasets/web_of_science.md)
- [OpenAlex](../datasets/openalex.md)
- [dimensions](../datasets/dimensions.md)

## References

- Sugimoto, C. R., Robinson-Garcia, N., Murray, D. S., Yegros-Yegros, A., Costas, R., & Lariviere, V. (2017). Scientists have most impact when they're free to move. *Nature*, 550, 29-31. https://doi.org/10.1038/550029a [OpenAlex: W2757063724; Dimensions: pub.1092034214; WoS: unknown]

## Metadata

- Concept ID: `journal_article_mobility_coverage_bias`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Sugimoto et al. (2017) (2017)
- Latest seen paper: Sugimoto et al. (2017) (2017)
- Primary reference DOI: `10.1038/550029a`
- OpenAlex ID: `W2757063724`
- Dimensions ID: `pub.1092034214`
- SciSciNet ID: `W2757063724`
- Aliases: mobility source coverage bias; WoS mobility coverage caveat; journal-index affiliation bias; discipline-biased mobility estimator
