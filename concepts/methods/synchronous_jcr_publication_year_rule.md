# Synchronous JCR publication-year rule

## Summary

RCR assigns each article the two-year synchronous journal citation rate for its journal and publication year.

## Canonical Form

- Unit of analysis: article, journal, publication year, JCR value, or field baseline input.
- Typical representation: journal-year matching rule for synchronous citation-rate values.
- Mechanism, measurement, or validation target: time-aligned venue-rate inputs for field citation baselines.
- Empirical signature: changing the journal-year matching rule changes FCR and JIF comparisons for the same focal article.

## Uses in Science of Science

- Refines citation-window normalization by linking it to [journal impact factor](../measures/journal_impact_factor.md) and [journal citation score baseline](../measures/journal_citation_score_baseline.md).
- Useful as a reusable check when [citation window selection](citation_window_selection.md) is used in science-of-science inference.
- Creates cross-links to [field citation rate](../measures/field_citation_rate.md) so the motif is not interpreted in isolation.

## Operationalization

- Identify each article's journal and publication year.
- Attach the synchronous two-year journal citation rate for that same publication year.
- Record missing journal-year cases and test whether alternate windows affect the RCR denominator.

## Evidence and Validations

- Verified full-text evidence from Hutchins et al. (2016) states that JCR is assigned using the journal's two-year synchronous JCR in the publication year.
- The authors use observed JCR stability to justify the parsimonious publication-year matching rule.

## Caveats

- Synchronous JCR can be missing or unstable for some journals.
- Publication-year matching is still a venue proxy and should not be read as article-level influence.

## Links

- [Journal impact factor](../measures/journal_impact_factor.md)
- [Journal citation score baseline](../measures/journal_citation_score_baseline.md)
- [Citation window selection](citation_window_selection.md)
- [Field citation rate](../measures/field_citation_rate.md)
- [Co-citation journal-rate substrate](co_citation_journal_rate_substrate.md)
- [Citation-index snapshot dependence](../validations/citation_index_snapshot_dependence.md)

## References

- Hutchins, B. I., Yuan, X., Anderson, J. M., & Santangelo, G. M. (2016). Relative Citation Ratio (RCR): A new metric that uses citation rates to measure influence at the article level. *PLOS Biology*, 14(9), e1002541. https://doi.org/10.1371/journal.pbio.1002541 [OpenAlex: W2953304564; Dimensions: pub.1017460035; WoS: unknown]

## Metadata

- Concept ID: `synchronous_jcr_publication_year_rule`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Hutchins et al. (2016) (2016)
- Latest seen paper: Hutchins et al. (2016) (2016)
- Primary reference DOI: `10.1371/journal.pbio.1002541`
- OpenAlex ID: `W2953304564`
- Dimensions ID: `pub.1017460035`
- SciSciNet ID: `W2953304564`
- Aliases: publication-year JCR matching; synchronous journal citation rate; JCR year alignment
