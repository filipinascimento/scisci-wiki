# SSRN self-citation replication check

## Summary

SSRN self-citation replication check compares gendered self-citation patterns in the JSTOR corpus with a smaller disambiguated Social Science Research Network corpus.

## Canonical Form

- Unit of analysis: author, paper, authorship, self-citation, archive, or replication corpus.
- Typical representation: replication comparison of self-citation rates, gender ratios, paper-count controls, and corpus-selection caveats.
- Validation target: test whether a self-citation gap appears in a corpus with different field coverage, author disambiguation, and publication status.
- Empirical signature: a similar aggregate gender gap appears in SSRN, but equal-paper-count comparisons weaken behavioral interpretation.

## Uses in Science of Science

- Provides an external validation for [gendered self-citation gap](../mechanisms/gendered_self_citation_gap.md).
- Checks whether findings from the [JSTOR network dataset](../datasets/jstor_network_dataset.md) depend on missing author disambiguation.
- Links self-citation analysis to [matched career counterfactuals](../methods/matched_career_counterfactuals.md), because paper-count differences can explain aggregate gaps.
- Helps separate corpus replication from causal adjudication of self-citation mechanisms.

## Operationalization

- Build a comparison corpus with disambiguated authors and self-citation edges.
- Assign gender using the same or a comparable name-inference procedure.
- Compare aggregate self-citation shares and group-specific self-citations per paper.
- Recompare authors with the same number of papers to test whether aggregate gaps persist after productivity opportunity is held fixed.
- Report archive-selection, field-coverage, peer-review, and upload-choice caveats.

## Evidence and Validations

- Verified full-text evidence from King et al. (2017) uses SSRN as an additional check on the JSTOR findings.
- The paper states that SSRN contains disambiguated authors, includes 426,412 papers from 99,465 authors, and has more than 2.4 million citations among those papers.
- King et al. report a gender self-citation gap of similar magnitude in SSRN, with men making up 73% of authorships but 87% of self-citations.
- The appendix also reports that men with the same number of papers as women do not appear to self-cite appreciably more, so the SSRN result supports replication of the aggregate gap but not a simple behavioral interpretation.

## Caveats

- SSRN is smaller, field-limited, and based on voluntary uploads rather than a universal publication denominator.
- SSRN includes preprints and non-peer-reviewed material, so its citation and self-citation norms may differ from journal corpora.
- A replication of the aggregate gap does not prove the same mechanism drives the gap in both datasets.

## Links

- [gendered self-citation gap](../mechanisms/gendered_self_citation_gap.md)
- [JSTOR network dataset](../datasets/jstor_network_dataset.md)
- [authorship-normalized self-citation rate](../measures/authorship_normalized_self_citation_rate.md)
- [full-name self-citation matching](../methods/full_name_self_citation_matching.md)
- [self-citation bootstrap ratio intervals](../methods/self_citation_bootstrap_ratio_intervals.md)
- [matched career counterfactuals](../methods/matched_career_counterfactuals.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- King, M. M., Bergstrom, C. T., Correll, S. J., Jacquet, J., & West, J. D. (2017). Men set their own cites high: Gender and self-citation across fields and over time. *Socius: Sociological Research for a Dynamic World*, 3, 2378023117738903. https://doi.org/10.1177/2378023117738903 [OpenAlex: W2466144917; Dimensions: pub.1099634910; WoS: unknown]

## Metadata

- Concept ID: `ssrn_self_citation_replication_check`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: King et al. (2017) (2017)
- Latest seen paper: King et al. (2017) (2017)
- Primary reference DOI: `10.1177/2378023117738903`
- OpenAlex ID: `W2466144917`
- Dimensions ID: `pub.1099634910`
- SciSciNet ID: `W3104836124`
- Aliases: SSRN gender self-citation replication; disambiguated self-citation replication; SSRN self-citation validation; self-citation archive replication
