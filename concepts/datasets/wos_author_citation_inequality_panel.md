# WoS author citation inequality panel

## Summary

The WoS author citation inequality panel is a disambiguated author-paper dataset used to study author-level citation concentration across broad scientific fields from 2000 onward.

## Canonical Form

- Unit of analysis: author, paper, authorship, field, institution, country, citation score, or time window.
- Typical representation: linked author-paper-authorship table with field-normalized citation scores, affiliations, fields, and publication counts.
- Data target: measure cumulative author-level citation inequality rather than only paper-level citation skew.
- Empirical signature: millions of disambiguated authors are linked to tens of millions of papers and authorships before inequality statistics are calculated.

## Uses in Science of Science

- Provides the data substrate for [citation elite concentration](../measures/citation_elite_concentration.md), [author citation Gini](../measures/author_citation_gini.md), and [citation density percentile curve](../representations/citation_density_percentile_curve.md).
- Connects [Web of Science](web_of_science.md) records to author-level stratification, geography, and institutional concentration.
- Makes author-disambiguation, field-classification, document-type, and coverage filters visible before interpreting [attention inequality](../mechanisms/attention_inequality.md).
- Supports sensitivity checks such as [low-output author exclusion conservative bias](../validations/low_output_author_exclusion_conservative_bias.md) and [subfield reference coverage filter](../validations/subfield_reference_coverage_filter.md).

## Operationalization

- Start from a Web of Science installation with indexed papers, citations, authors, affiliations, and subject categories.
- Apply an author-disambiguation algorithm and retain authors meeting the publication-count threshold required for reliable profiles.
- Restrict the field and document-type frame to the intended research population.
- Attach a detailed paper-level or journal-based field classification.
- Compute paper-level normalized citation scores and aggregate them to authors using full and fractional counting.
- Preserve author, paper, and authorship counts after every filter.

## Evidence and Validations

- Verified full-text evidence from Nielsen and Andersen (2021) uses Web of Science metadata with algorithmically disambiguated author names and a detailed field-classification system.
- Their starting point is 4,995,039 disambiguated author names after requiring at least five WoS publications.
- After excluding humanities, social sciences, and engineering and technology, then removing low-reference-coverage subfields, their relevant population contains 4,042,612 authors.
- The linked dataset includes 25,986,133 distinct papers and 92,856,807 authorships, with full research papers and reviews retained while letters, editorials, comments, and other document types are excluded.
- The authors use this panel to measure citation concentration by author percentile, field, country, institution, and time period.

## Caveats

- The panel is not a complete population of all scientists; it excludes low-output authors, selected fields, and document types outside journal articles and reviews.
- Author disambiguation and affiliation harmonization affect author portfolios and geographic assignments.
- Web of Science coverage shapes field and country visibility.
- The dataset is built for inequality measurement and should not be reused for individual evaluation without additional audit.

## Links

- [Web of Science](web_of_science.md)
- [citation elite concentration](../measures/citation_elite_concentration.md)
- [country-field weighted disambiguation audit](../validations/country_field_weighted_disambiguation_audit.md)
- [author-majority field domain filter](../methods/author_majority_field_domain_filter.md)
- [author citation Gini](../measures/author_citation_gini.md)
- [normalized inflation-corrected citation score](../measures/normalized_inflation_corrected_citation_score.md)
- [full versus fractional citation counting](../measures/full_fractional_citation_counting.md)
- [citation elite geography](../representations/citation_elite_geography.md)
- [low-output author exclusion conservative bias](../validations/low_output_author_exclusion_conservative_bias.md)
- [subfield reference coverage filter](../validations/subfield_reference_coverage_filter.md)
- [citation elite multidimensionality caveat](../validations/citation_elite_multidimensionality_caveat.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)

## References

- Nielsen, M. W., & Andersen, J. P. (2021). Global citation inequality is on the rise. *Proceedings of the National Academy of Sciences*, 118(7), e2012208118. https://doi.org/10.1073/pnas.2012208118 [OpenAlex: W3128893582; Dimensions: pub.1135221443; WoS: unknown]

## Metadata

- Concept ID: `wos_author_citation_inequality_panel`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Nielsen and Andersen (2021) (2021)
- Latest seen paper: Nielsen and Andersen (2021) (2021)
- Primary reference DOI: `10.1073/pnas.2012208118`
- OpenAlex ID: `W3128893582`
- Dimensions ID: `pub.1135221443`
- SciSciNet ID: `W3128893582`
- Aliases: author citation inequality panel; disambiguated WoS author panel; author-paper citation inequality dataset; global citation elite panel
