# External journal-list field-panel construction

## Summary

External journal-list field-panel construction builds field-specific venue panels by matching curated external journal lists to bibliometric source records.

## Canonical Form

- Unit of analysis: journal, field, external list entry, bibliometric source record, or journal panel.
- Typical representation: external list, title-normalized journal match, field assignment, eligibility filter, and final field panel.
- Method target: construct a venue set for field comparison when database categories alone are not the desired boundary.
- Empirical signature: a field panel is assembled from outside curated lists and then filtered for source coverage, publication volume, and time depth.

## Uses in Science of Science

- Supplies a panel-construction method for [chaperone-effect journal panel](../datasets/chaperone_effect_journal_panel.md).
- Connects venue analysis to [field classifications](../measures/field_classifications.md) while preserving an auditable source-list provenance.
- Works with [journal set field-boundary filter](../validations/journal_set_field_boundary_filter.md) to remove unstable or thin journals.
- Can be reused for journal-metric, venue-access, and field-comparison studies.

## Operationalization

- Select external curated lists for the fields under study.
- Normalize journal titles, ISSNs, publisher variants, abbreviations, and name changes.
- Match list entries to a bibliometric database such as Web of Science, Dimensions, OpenAlex, or Scopus.
- Apply coverage-duration and publication-volume filters before analysis.
- Record unmatched journals, ambiguous matches, and field-list source dates.

## Evidence and Validations

- Verified full-text evidence from Sekara et al. (2018) describes parsing dedicated Wikipedia journal-list pages for medicine, biology, mathematics, chemistry, and physics.
- The authors matched these lists to Web of Science journal records before applying publication-count and longitudinal-coverage filters.
- This method separates field-panel construction from downstream chaperone-effect measurement.

## Caveats

- External lists can be incomplete, stale, popularity-biased, or inconsistently curated.
- Journal title changes and multidisciplinary scopes can create ambiguous matches.
- Database coverage filters can reshape the original external field boundary.

## Links

- [chaperone-effect journal panel](../datasets/chaperone_effect_journal_panel.md)
- [journal set field-boundary filter](../validations/journal_set_field_boundary_filter.md)
- [field classifications](../measures/field_classifications.md)
- [journal-specific author-order histories](../representations/journal_specific_author_order_histories.md)
- [venue chaperone effect](../mechanisms/venue_chaperone_effect.md)
- [Web of Science](../datasets/web_of_science.md)

## References

- Sekara, V., Deville, P., Ahnert, S. E., Barabasi, A.-L., Sinatra, R., & Lehmann, S. (2018). The chaperone effect in scientific publishing. *Proceedings of the National Academy of Sciences*, 115(50), 12603-12607. https://doi.org/10.1073/pnas.1800471115 [OpenAlex: W2904801760; Dimensions: pub.1110510902; WoS: unknown]

## Metadata

- Concept ID: `external_journal_list_field_panel_construction`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Sekara et al. (2018) (2018)
- Latest seen paper: Sekara et al. (2018) (2018)
- Primary reference DOI: `10.1073/pnas.1800471115`
- OpenAlex ID: `W2904801760`
- Dimensions ID: `pub.1110510902`
- SciSciNet ID: `W2904801760`
- Aliases: curated journal-list panel; external field journal list; journal-list matching; field panel journal construction
