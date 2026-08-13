# Chaperone-effect journal panel

## Summary

Chaperone-effect journal panel is a journal-level publication history dataset used to trace whether senior authors previously published in the same venue as junior authors.

## Canonical Form

- Unit of analysis: paper, journal, author-position record, senior author, publication year, field, or derived journal-year panel.
- Typical representation: author-venue histories, new/chaperoned/established PI shares, chaperone-effect ratios, random and alphabetical baselines, and citation-impact comparisons.
- Measurement target: venue-specific experience and apprenticeship in publishing as a senior author.
- Empirical signature: journals differ in the share of senior authors who are new, previously junior, or previously senior in that venue.

## Uses in Science of Science

- Supplies the data layer for [venue chaperone effect](../mechanisms/venue_chaperone_effect.md).
- Supports [journal-specific author-order histories](../representations/journal_specific_author_order_histories.md), [venue PI experience categories](../measures/venue_pi_experience_categories.md), [chaperone-effect ratio](../measures/chaperone_effect_ratio.md), and [field chaperone-effect gradient](../measures/field_chaperone_effect_gradient.md).
- Connects [Web of Science](web_of_science.md) publication records to venue-level career-transition analysis.
- Provides a reproducibility split between restricted raw WoS records and public derived outputs.
- Extends [coauthorship source-domain panels](coauthorship_source_domain_panels.md) with within-journal author-order trajectories.
- Lower-level construction and release motifs are now split into [external journal-list field-panel construction](../methods/external_journal_list_field_panel_construction.md), [restricted-raw public-derived bibliometric release](../methods/restricted_raw_public_derived_bibliometric_release.md), and [established PI share trajectory](../measures/established_pi_share_trajectory.md).

## Operationalization

- Start from publication records with journal name, publication date, author names, byline order, affiliations, document type, and references.
- Restrict to journals and publication types suitable for author-order analysis, such as articles, letters, and reviews.
- Assign each journal to a field panel and retain journals with enough years and publications for stable estimates.
- Use [journal-scoped initial-name disambiguation](../methods/journal_scoped_initial_name_disambiguation.md) or a stronger author-identity method before building author histories.
- Build author histories within each journal, classify senior authors, and compute derived journal-level outputs.
- Publish derived category shares and metric values when raw bibliometric records cannot be redistributed.

## Evidence and Validations

- Verified full-text evidence from Sekara et al. (2018) uses Web of Science publication data purchased in 2013, covering more than 50 million papers across more than 22,000 journals from 1898 to 2012.
- Their main analysis focuses on 6.1 million papers from 1960 to 2012 in 386 journals across mathematics, physics, chemistry, biology, medicine, and three interdisciplinary journals: Nature, Science, and PNAS.
- The paper reports the selected journal counts by field: 97 biology, 337 medicine, 243 physics, 248 mathematics, 138 chemistry, and 3 interdisciplinary journals before later filtering to journals meeting length and publication-count criteria.
- The final panel includes field-specific publication counts and also adds Nature's full publication history through the Nature OpenSearch API.
- Sekara et al. make derived data on new, established, and chaperoned PI proportions plus `c`, `C`, and `Calphabet` available on GitHub, while raw Web of Science records cannot be publicly shared.
- Their methods also support an explicit external-list field-panel construction motif and a licensed-raw/public-derived release motif.

## Caveats

- Raw Web of Science restrictions limit direct public reproduction from the original records.
- Journal selection, document-type filtering, author-order conventions, and name disambiguation all shape the derived panel.
- Venue-specific histories do not observe rejected manuscripts or informal mentoring.
- Nature's full-history API source is not identical to the broader WoS source.

## Links

- [venue chaperone effect](../mechanisms/venue_chaperone_effect.md)
- [journal-specific author-order histories](../representations/journal_specific_author_order_histories.md)
- [venue PI experience categories](../measures/venue_pi_experience_categories.md)
- [chaperone-effect ratio](../measures/chaperone_effect_ratio.md)
- [field chaperone-effect gradient](../measures/field_chaperone_effect_gradient.md)
- [journal-scoped initial-name disambiguation](../methods/journal_scoped_initial_name_disambiguation.md)
- [random author-order chaperone null](../validations/random_author_order_chaperone_null.md)
- [alphabetical author-order chaperone null](../validations/alphabetical_author_order_chaperone_null.md)
- [accepted-publication transition denominator limit](../validations/accepted_publication_transition_denominator_limit.md)
- [chaperoned PI citation-impact comparison](../validations/chaperoned_pi_citation_impact_comparison.md)
- [Web of Science](web_of_science.md)
- [coauthorship source-domain panels](coauthorship_source_domain_panels.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [external journal-list field-panel construction](../methods/external_journal_list_field_panel_construction.md)
- [restricted-raw public-derived bibliometric release](../methods/restricted_raw_public_derived_bibliometric_release.md)
- [established PI share trajectory](../measures/established_pi_share_trajectory.md)

## References

- Sekara, V., Deville, P., Ahnert, S. E., Barabasi, A.-L., Sinatra, R., & Lehmann, S. (2018). The chaperone effect in scientific publishing. *Proceedings of the National Academy of Sciences*, 115(50), 12603-12607. https://doi.org/10.1073/pnas.1800471115 [OpenAlex: W2904801760; Dimensions: pub.1110510902; WoS: unknown]

## Metadata

- Concept ID: `chaperone_effect_journal_panel`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Sekara et al. (2018) (2018)
- Latest seen paper: Sekara et al. (2018) (2018)
- Primary reference DOI: `10.1073/pnas.1800471115`
- OpenAlex ID: `W2904801760`
- Dimensions ID: `pub.1110510902`
- SciSciNet ID: `W2904801760`
- Aliases: chaperone journal dataset; PI publication-history panel; venue apprenticeship panel; author-order journal panel
