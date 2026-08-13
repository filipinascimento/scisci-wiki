# Journal self-citation exclusion

## Summary

Journal self-citation exclusion removes within-journal citation edges before computing a journal metric in order to reduce strategic self-citation incentives and same-journal feedback loops.

## Canonical Form

- Unit of analysis: journal citation matrix, same-journal edge, citation indicator, or journal-year ranking.
- Typical representation: metric computed with journal self-citations removed, plus sensitivity to inclusion.
- Validation target: whether a journal ranking depends on within-journal citations.
- Empirical signature: metrics become less vulnerable to editorially induced self-citation when same-journal edges are excluded.

## Uses in Science of Science

- Converts [journal self-citation rate](../measures/journal_self_citation_rate.md) from a descriptive measure into a preprocessing rule.
- Supports [Eigenfactor metrics](../measures/eigenfactor_metrics.md) and [journal citation random walk](../methods/journal_citation_random_walk.md) by documenting self-edge handling.
- Provides a metric-governance response to [citation metric gaming](citation_metric_gaming.md) and [impact factor biased self-citation practices](../measures/impact_factor_biased_self_citation_practices.md).
- Links journal-level self-citation policy to [responsible metrics](../measures/responsible_metrics.md).

## Operationalization

- Identify citation edges where the citing and cited journal are the same.
- Remove or zero those edges before normalization and recursive ranking.
- Recompute the metric and compare with the self-citation-included version where possible.
- Distinguish journal self-citations from author self-citations; the units differ.

## Evidence and Validations

- Verified full-text evidence from West et al. (2010) states that Eigenfactor metrics do not include self-citations.
- The paper explains that this choice is intended to reduce opportunities and incentives for editors or others to game rankings through strategically placed self-citations.
- West et al. clarify in a note that self-citations are defined at the journal level in their journal citation matrix, not at the individual-author level.
- The same note observes that Journal Citation Reports later introduced an impact-factor variant that omits self-citations.

## Caveats

- Removing all journal self-citations may also remove legitimate specialty continuity.
- The effect of exclusion should be reported because some journals or fields naturally cite within a tight specialty.
- Journal-level self-citation exclusion does not address author-level or cartel-like cross-journal citation strategies.
- Self-citation policy interacts with citation-window length and field density.

## Links

- [journal self-citation rate](../measures/journal_self_citation_rate.md)
- [journal citation random walk](../methods/journal_citation_random_walk.md)
- [Eigenfactor metrics](../measures/eigenfactor_metrics.md)
- [JCR 2006 journal citation network](../datasets/jcr_2006_journal_citation_network.md)
- [citation metric gaming](citation_metric_gaming.md)
- [impact factor biased self-citation practices](../measures/impact_factor_biased_self_citation_practices.md)
- [self-citation rates](../measures/self_citation_rates.md)

## References

- West, J. D., Bergstrom, T. C., & Bergstrom, C. T. (2010). The Eigenfactor Metrics: A network approach to assessing scholarly journals. *College & Research Libraries*, 71(3), 236-244. https://doi.org/10.5860/0710236 [OpenAlex: W1993001003; Dimensions: pub.1002494331; WoS: unknown]

## Metadata

- Concept ID: `journal_self_citation_exclusion`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: West et al. (2010) (2010)
- Latest seen paper: West et al. (2010) (2010)
- Primary reference DOI: `10.5860/0710236`
- OpenAlex ID: `W1993001003`
- Dimensions ID: `pub.1002494331`
- SciSciNet ID: `W1993001003`
- Aliases: journal self-citation removal; self-edge exclusion; same-journal citation exclusion; Eigenfactor self-citation exclusion
