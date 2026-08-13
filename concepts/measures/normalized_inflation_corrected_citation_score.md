# Normalized inflation-corrected citation score

## Summary

Normalized inflation-corrected citation score measures paper impact after correcting citation counts for field, publication year, and the changing volume of references over time.

## Canonical Form

- Unit of analysis: paper, author-paper pair, author portfolio, field, institution, or country.
- Typical representation: citation score centered around one after field-year normalization and reference-inflation correction.
- Measurement target: comparable citation impact across cohorts even when later papers face a larger citation universe.
- Empirical signature: uncited papers have zero, average comparable papers are near one, and extreme papers remain unbounded above.

## Uses in Science of Science

- Extends [field-normalized citation impact](field_normalized_citation_impact.md) by discounting citations from years with larger reference volumes.
- Provides the citation input for author-level [citation elite concentration](citation_elite_concentration.md).
- Helps distinguish real [attention inequality](../mechanisms/attention_inequality.md) from citation inflation caused by database and reference-list growth.
- Complements [mean normalized citation score](mean_normalized_citation_score.md) when the question is about temporal comparability rather than only field comparability.

## Operationalization

- Assign each paper to a field and publication year using a stable field delineation.
- Weight each incoming citation by the reciprocal of all references made in the citing year.
- Sum these weighted citing references to get an inflation-corrected citation score.
- Divide that score by the mean inflation-corrected score for comparable papers in the same field and year.
- Aggregate to authors or institutions with an explicit full-count or fractional-count rule.

## Evidence and Validations

- Verified full-text evidence from Nielsen and Andersen (2021) defines an inflation-corrected citation value where each citing reference in year y is weighted by the reciprocal of total references in that year.
- The same paper then field-normalizes the inflation-corrected score by dividing by the mean score for papers in the same field-year cell, producing nics.
- Nielsen and Andersen use this score as the input for full and fractional author citation totals over 2000-2015, reducing the chance that rising citation inequality is only an artifact of WoS growth or citation inflation.
- Their robustness checks with fixed author counts and fixed journal sets produce near-identical concentration trends, supporting the score's role as a temporal comparability device.
- The fixed-set checks are split out as [fixed-set citation inequality sensitivity](../validations/fixed_set_citation_inequality_sensitivity.md).

## Caveats

- The correction depends on reference coverage in the citation database.
- Field delineation choices can change expected citation baselines.
- The score reduces broad inflation effects but does not remove self-citation, citation farms, author-disambiguation errors, or field-specific citation customs.

## Links

- [field-normalized citation impact](field_normalized_citation_impact.md)
- [mean normalized citation score](mean_normalized_citation_score.md)
- [citation elite concentration](citation_elite_concentration.md)
- [full versus fractional citation counting](full_fractional_citation_counting.md)
- [author citation Gini](author_citation_gini.md)
- [attention inequality](../mechanisms/attention_inequality.md)
- [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)
- [fixed-set citation inequality sensitivity](../validations/fixed_set_citation_inequality_sensitivity.md)
- [web of science](../datasets/web_of_science.md)

## References

- Nielsen, M. W., & Andersen, J. P. (2021). Global citation inequality is on the rise. *Proceedings of the National Academy of Sciences*, 118(7), e2012208118. https://doi.org/10.1073/pnas.2012208118 [OpenAlex: W3128893582; Dimensions: pub.1135221443; WoS: unknown]
- Waltman, L. (2016). A review of the literature on citation impact indicators. *Journal of Informetrics*, 10(2), 365-391. https://doi.org/10.1016/j.joi.2016.02.007 [OpenAlex: W767067438; Dimensions: pub.1051718960; WoS: unknown]

## Metadata

- Concept ID: `normalized_inflation_corrected_citation_score`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Nielsen and Andersen (2021) (2021)
- Latest seen paper: Nielsen and Andersen (2021) (2021)
- Primary reference DOI: `10.1073/pnas.2012208118`
- OpenAlex ID: `W3128893582`
- Dimensions ID: `pub.1135221443`
- SciSciNet ID: `W3128893582`
- Aliases: nics; inflation-corrected normalized citations; normalized inflation corrected score; field-normalized inflation-corrected citations
