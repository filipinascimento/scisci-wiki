# APS-WoS credit robustness

## Summary

APS-WoS credit robustness tests whether inferred credit rankings remain stable when the credit-allocation method is run on databases with different coverage.

## Canonical Form

- Unit of analysis: author, paper, discovery topic, bibliographic database, citation neighborhood, or credit ranking.
- Typical representation: side-by-side credit-share rankings from APS and Web of Science citation data.
- Validation target: sensitivity of credit allocation to source coverage.
- Empirical signature: relative credit rankings remain stable despite large differences in citation-neighborhood size.

## Uses in Science of Science

- Validates [collective credit allocation](../measures/collective_credit_allocation.md) against database dependence.
- Provides a source-coverage companion to [citation database coverage sensitivity](citation_database_coverage_sensitivity.md).
- Supports [independent-author credit comparison](../methods/independent_author_credit_comparison.md) when topic-level credit is estimated from incomplete citation databases.
- Reinforces [responsible metrics](../measures/responsible_metrics.md) by requiring database-source sensitivity checks for attribution scores.

## Operationalization

- Run the same credit-allocation procedure on two or more bibliographic databases.
- Compare relative rankings and credit-share magnitudes, not just absolute counts.
- Report coverage differences, missing venues, and citation-neighborhood sizes.
- Inspect whether disagreements cluster by field, geography, journal type, or era.

## Evidence and Validations

- Verified full-text evidence from Shen and Barabasi (2014) compares credit results from the APS dataset and Web of Science.
- The paper notes that APS covers APS journals from 1893 to 2009 and is biased toward the U.S.-based physics community, while Web of Science covers Thomson Reuters-indexed papers from 1955 to 2012.
- Shen and Barabasi report that APS incompleteness never alters the relative ranking of researchers in their robustness table.
- For the Higgs case, the full text reports very different coverage sizes between APS and Web of Science but unchanged relative credit among the six authors.

## Caveats

- Stable rankings in one domain do not prove robustness across all fields or databases.
- Magnitudes can change even when ranks are stable.
- Database coverage can interact with language, geography, field, and publication type.

## Links

- [collective credit allocation](../measures/collective_credit_allocation.md)
- [co-citation credit attribution](../methods/co_citation_credit_attribution.md)
- [independent-author credit comparison](../methods/independent_author_credit_comparison.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)
- [Web of Science](../datasets/web_of_science.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Shen, H.-W., & Barabasi, A.-L. (2014). Collective credit allocation in science. *Proceedings of the National Academy of Sciences*, 111(34), 12325-12330. https://doi.org/10.1073/pnas.1401992111 [OpenAlex: W2037997493; Dimensions: pub.1014325139; WoS: unknown]

## Metadata

- Concept ID: `aps_wos_credit_robustness`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Shen and Barabasi (2014) (2014)
- Latest seen paper: Shen and Barabasi (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1401992111`
- OpenAlex ID: `W2037997493`
- Dimensions ID: `pub.1014325139`
- SciSciNet ID: `W2037997493`
- Aliases: APS WOS robustness; credit database robustness; source-coverage credit check; APS Web of Science credit comparison
