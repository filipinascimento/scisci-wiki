# Article-letter team-production scope boundary

## Summary

Team-production denominators in Wuchty et al. include WoS articles and letters while excluding books, reviews, editorials, meeting abstracts, and other media.

## Canonical Form

- Unit of analysis: publication record, WoS document type, field, branch, patent panel, or team-production denominator.
- Typical representation: document-type inclusion table for team-authored scientific outputs.
- Mechanism, measurement, or validation target: scope of publication denominators in team-production trend estimates.
- Empirical signature: team shares and impact ratios change when letters are included or nonresearch document types are excluded differently.

## Uses in Science of Science

- Refines team-production denominator validation by linking it to [document type citation filtering](../methods/document_type_citation_filtering.md) and [wos uspto team production panel](../datasets/wos_uspto_team_production_panel.md).
- Useful as a reusable check when [web of science](../datasets/web_of_science.md) is used in science-of-science inference.
- Creates cross-links to [team authorship share](../measures/team_authorship_share.md) so the motif is not interpreted in isolation.

## Operationalization

- Include WoS articles and letters in the publication denominator and record the document-type rule.
- Exclude reviews, editorials, books, meeting abstracts, and other nonresearch media unless a sensitivity analysis says otherwise.
- Report field-specific denominator loss, especially for humanities and conference-heavy fields.

## Evidence and Validations

- Verified local full text from Wuchty et al. (2007) describes the WoS scope as full research articles and shorter research letters.
- The same source excludes books, reviews, editorials, abstracts, and other media from the core publication denominator.

## Caveats

- The boundary is close to generic document-type filtering but specifically affects team-production denominators.
- Field comparisons can be distorted when local scholarly communication uses books or proceedings heavily.

## Links

- [Document-type citation filtering](../methods/document_type_citation_filtering.md)
- [WOS-USPTO team-production panel](../datasets/wos_uspto_team_production_panel.md)
- [Web of Science](../datasets/web_of_science.md)
- [Team-authorship share](../measures/team_authorship_share.md)
- [Humanities solo-authorship persistence](humanities_solo_authorship_persistence.md)
- [Domain start-year coverage boundary](domain_start_year_coverage_boundary.md)

## References

- Wuchty, S., Jones, B. F., & Uzzi, B. (2007). The increasing dominance of teams in production of knowledge. *Science*, 316(5827), 1036-1039. https://doi.org/10.1126/science.1136099 [OpenAlex: W1965631677; Dimensions: pub.1062455003; WoS: unknown]

## Metadata

- Concept ID: `article_letter_team_production_scope_boundary`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wuchty et al. (2007) (2007)
- Latest seen paper: Wuchty et al. (2007) (2007)
- Primary reference DOI: `10.1126/science.1136099`
- OpenAlex ID: `W1965631677`
- Dimensions ID: `pub.1062455003`
- SciSciNet ID: `W1965631677`
- Aliases: article-letter denominator; Wuchty document-type scope; team-production publication filter
