# Article citation rate

## Summary

Article citation rate measures how quickly a paper accumulates citations over a specified citation window.

## Canonical Form

- Unit of analysis: paper, article-year, publication cohort, or portfolio.
- Typical representation: citations per year, often excluding the publication year.
- Mechanism or measurement target: observed citation accrual speed before field or benchmark normalization.
- Empirical signature: papers with the same total citations can differ if they have been available for different amounts of time.

## Uses in Science of Science

- Provides the numerator for [Relative Citation Ratio](relative_citation_ratio.md).
- Supports age-aware citation comparisons, citation trajectory modeling, and early influence monitoring.
- Separates observed citation accrual from expected field-level citation behavior.

## Operationalization

- Count citations received by a paper during the selected observation window.
- Divide by eligible years, often excluding the calendar year of publication.
- Pair with a citation-window rule and database snapshot date.
- Use field or benchmark normalization before comparing across fields or cohorts.

## Evidence and Validations

- Verified full-text evidence from Hutchins et al. (2016) defines article citation rate as total citations divided by the number of years excluding the publication year.
- In the RCR algorithm, article citation rate is the numerator that is later divided by an expected citation rate.
- The paper reports article citation rate together with field citation rate, expected citation rate, and RCR in the iCite tool output.
- This makes article citation rate a reusable primitive inside field-normalized article-level metrics.

## Caveats

- Citation rate is still raw attention until normalized for field, age, document type, and comparison group.
- Very recent papers can have unstable rates because citation accumulation is sparse.
- Database coverage and citation snapshot date should be recorded.

## Links

- [Relative Citation Ratio](relative_citation_ratio.md)
- [expected citation rate](expected_citation_rate.md)
- [field citation rate](field_citation_rate.md)
- [field normalized citation impact](field_normalized_citation_impact.md)
- [citation window selection](../methods/citation_window_selection.md)
- [citation trajectory models](../methods/citation_trajectory_models.md)
- [citation impact indicators](citation_impact_indicators.md)

## References

- Hutchins, B. I., Yuan, X., Anderson, J. M., & Santangelo, G. M. (2016). Relative Citation Ratio (RCR): A new metric that uses citation rates to measure influence at the article level. *PLOS Biology*, 14(9), e1002541. https://doi.org/10.1371/journal.pbio.1002541 [OpenAlex: W2953304564; Dimensions: pub.1017460035; WoS: unknown]

## Metadata

- Concept ID: `article_citation_rate`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Hutchins et al. (2016) (2016)
- Latest seen paper: Hutchins et al. (2016) (2016)
- Primary reference DOI: `10.1371/journal.pbio.1002541`
- OpenAlex ID: `W2953304564`
- Aliases: ACR; citations per year; article CPY; citation accrual rate
