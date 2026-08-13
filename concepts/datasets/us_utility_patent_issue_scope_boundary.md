# U.S. utility-patent issue-scope boundary

## Summary

The patent side of Wuchty et al.'s team-production panel is issued U.S. utility patents, not applications or non-U.S. patent systems.

## Canonical Form

- Unit of analysis: issued U.S. utility patent, USPTO record, inventor team, issue year, technology class, or patent citation.
- Typical representation: issued-utility-patent panel with inventor counts and citation outcomes.
- Mechanism, measurement, or validation target: scope of patent evidence in cross-domain team-production studies.
- Empirical signature: team-production patterns are conditional on issued USPTO utility patents and may differ for applications or other offices.

## Uses in Science of Science

- Refines patent dataset scope by linking it to [wos uspto team production panel](wos_uspto_team_production_panel.md) and [nber utility patent microdata backbone](nber_utility_patent_microdata_backbone.md).
- Useful as a reusable check when [patent examiner citation caveat](../validations/patent_examiner_citation_caveat.md) is used in science-of-science inference.
- Creates cross-links to [patent citation source roles](../validations/patent_citation_source_roles.md) so the motif is not interpreted in isolation.

## Operationalization

- Restrict patent records to issued U.S. utility patents in the documented period.
- Preserve issue-year, technology-class, inventor-count, and citation fields.
- Avoid generalizing to patent applications or non-U.S. systems without revalidation.

## Evidence and Validations

- Verified local full text from Wuchty et al. (2007) states that patent data came from USPTO utility patents issued from 1975 to 1999 and compiled from the Hall-Jaffe-Trajtenberg source.
- The issued-patent scope determines the patent denominator for team-production comparisons.

## Caveats

- Issued patents are selected relative to applications.
- U.S. inventorship and citation practices may not transfer to other patent offices.

## Links

- [WOS-USPTO team-production panel](wos_uspto_team_production_panel.md)
- [NBER utility-patent microdata backbone](nber_utility_patent_microdata_backbone.md)
- [Patent examiner citation caveat](../validations/patent_examiner_citation_caveat.md)
- [Patent citation source roles](../validations/patent_citation_source_roles.md)
- [Patent forward-citation value proxy](../measures/patent_forward_citation_value_proxy.md)
- [Author-inventor team equivalence rule](../representations/author_inventor_team_equivalence_rule.md)

## References

- Wuchty, S., Jones, B. F., & Uzzi, B. (2007). The increasing dominance of teams in production of knowledge. *Science*, 316(5827), 1036-1039. https://doi.org/10.1126/science.1136099 [OpenAlex: W1965631677; Dimensions: pub.1062455003; WoS: unknown]

## Metadata

- Concept ID: `us_utility_patent_issue_scope_boundary`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Wuchty et al. (2007) (2007)
- Latest seen paper: Wuchty et al. (2007) (2007)
- Primary reference DOI: `10.1126/science.1136099`
- OpenAlex ID: `W1965631677`
- Dimensions ID: `pub.1062455003`
- SciSciNet ID: `W1965631677`
- Aliases: USPTO utility-patent scope; issued-patent denominator; HJT patent-scope boundary
